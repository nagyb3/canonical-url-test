"use client";

import { usePathname } from "next/navigation";
import React from "react";

const CanonicalLink = () => {
  const pathname = usePathname();

  return (
    <link
      rel="canonical"
      href={`https://canonical-url-test.vercel.app${pathname}`}
    />
  );
};

export default CanonicalLink;
