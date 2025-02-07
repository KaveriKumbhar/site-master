import { db } from "@/lib/db";
import { getAgencyId } from "@/lib/queries";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: { subaccountId: string };
};

const Pipelines = async ({ params }: Props) => {
  let agencyId = await getAgencyId();
  const pipelineExists = await db.pipeline.findMany({
    where: { agencyId: agencyId },
  });

  console.log(pipelineExists);

  if (pipelineExists.length > 0)
    return redirect(
      `/subaccount/${params.subaccountId}/pipelines/${pipelineExists[0].id}`
    );

  try {
    const response = await db.pipeline.create({
      data: {
        name: "First Pipeline",
        subAccountId: params.subaccountId,
        agencyId,
      },
    });

    return redirect(
      `/subaccount/${params.subaccountId}/pipelines/${response.id}`
    );
  } catch (error) {
    console.log();
  }
};

export default Pipelines;
