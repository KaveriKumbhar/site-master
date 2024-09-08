import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

import { dark } from "@clerk/themes";

type Props = {};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>{children}</ClerkProvider>
  );
}
