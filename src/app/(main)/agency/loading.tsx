import React from "react";

type Props = {};

function Loading({}: Props) {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src="/assets/loading.gif" alt="Loading..." className="w-20 h-20" />
    </div>
  );
}

export default Loading;