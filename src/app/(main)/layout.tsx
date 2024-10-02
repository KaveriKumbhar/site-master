import React from "react";

type Props = {};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex flex-col items-center justify-center">{children}</div>
  );
}
