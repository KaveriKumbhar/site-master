import AgencyDetails from '@/components/forms/agency-details'
import UserDetails from '@/components/forms/user-details'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

type Props = {
  params: { agencyId: string }
}

// const SettingsPage = async ({ params }: Props) => {
//   const authUser = await currentUser()
//   console.log(authUser)
//   // if (!authUser) return null

//   if (!authUser) {
//     console.log("No authenticated user")
//     return null
//   }
//   console.log("Authenticated User:", authUser)
//   const userDetails = await db.user.findUnique({
//     where: {
//       email: authUser.emailAddresses[0].emailAddress,
//     },
//   })

//   if (!userDetails) return null
//   const agencyDetails = await db.agency.findUnique({
//     where: {
//       id: params.agencyId,
//     },
//     include: {
//       SubAccount: true,
//     },
//   })

//   if (!agencyDetails) return null

//   const subAccounts = agencyDetails.SubAccount

//   return (
//     <div className="flex lg:!flex-row flex-col gap-4">
//       <AgencyDetails data={agencyDetails} />
//       <UserDetails
//         type="agency"
//         id={params.agencyId}
//         subAccounts={subAccounts}
//         userData={userDetails}
//       />
//     </div>
//   )
// }

const SettingsPage = async ({ params }: Props) => {
  const authUser = await currentUser()

  // Log the authenticated user after fetching it
  if (!authUser) {
    console.log("No authenticated user")
    return null
  }
  console.log("Authenticated User:", authUser)

  // Log the agency ID from the route parameters
  console.log("Agency ID:", params.agencyId)

  const userDetails = await db.user.findUnique({
    where: {
      email: authUser.emailAddresses[0].emailAddress,
    },
  })

  if (!userDetails) {
    console.log("No user details found for email:", authUser.emailAddresses[0].emailAddress)
    return null
  }
  console.log("User Details:", userDetails)

  const agencyDetails = await db.agency.findUnique({
    where: {
      id: params.agencyId,
    },
    include: {
      SubAccount: true,
    },
  })

  if (!agencyDetails) {
    console.log("No agency details found for ID:", params.agencyId)
    return null
  }
  console.log("Agency Details:", agencyDetails)

  const subAccounts = agencyDetails.SubAccount

  return (
    <div className="flex lg:!flex-row flex-col gap-4">
      <AgencyDetails data={agencyDetails} />
      <UserDetails
        type="agency"
        id={params.agencyId}
        subAccounts={subAccounts}
        userData={userDetails}
      />
    </div>
  )
}

export default SettingsPage