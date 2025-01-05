import React from "react";
import Loading from "../agency/loading";

type Props = {};

const loadingAgencyPage = (props: Props) => {
  return 
  (<div className="h-screen w-screen flex justify-center items-center">
     <Loading></Loading>
  </div>)
};

export default loadingAgencyPage;
