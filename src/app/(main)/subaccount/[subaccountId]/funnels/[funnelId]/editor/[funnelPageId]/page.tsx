import { db } from "@/lib/db";
import EditorProvider from "@/providers/editor/editor-provider";
import FunnelNavigation from "./_components/funnel-navigation";
import FunnelEditor from "./_components/funnel-editor";
import FunnelSidebar from "./_components/funnel-sidebar";
import { redirect, useParams } from "next/navigation";

type Props = {
  params: {
    subaccountId: string;
    funnelId: string;
    funnelPageId: string;
  };
};

const Funnel = async ({ params }: Props) => {
  const funnelPageDetails = await db.funnelPage.findFirst({
    where: {
      id: params.funnelPageId,
    },
  });
  if (!funnelPageDetails) {
    return redirect(
      `/subaccount/${params.subaccountId}/funnels/${params.funnelId}`
    );
  }

  console.log(params, funnelPageDetails, {
    id: params.funnelPageId,
  });

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[20] bg-background">
      <EditorProvider
        subaccountId={params.subaccountId}
        funnelId={params.funnelId}
        pageDetails={funnelPageDetails}
      >
        <FunnelNavigation
          funnelId={params.funnelId}
          funnelPageDetails={funnelPageDetails}
          subaccountId={params.subaccountId}
        />
        <div className="h-full flex justify-center">
          <FunnelEditor pageId={params.funnelPageId} />
        </div>

        <FunnelSidebar
          funnelId={params.funnelId}
          funnelPageDetails={funnelPageDetails}
          subaccountId={params.subaccountId}
        />
      </EditorProvider>
    </div>
  );
};

export default Funnel;
