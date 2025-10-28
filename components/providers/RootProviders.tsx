"use client";

import { IChildrenProps } from "@/types/interfaces";
import { ThemeProvider } from "next-themes";

function RootProviders({ children }: IChildrenProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

export default RootProviders;
