"use client"; // needed for using hooks in Next.js app directory

import { useEffect } from "react";

const AuthLayout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="flex justify-center pt-36 pb-16">{children}</div>;
};

export default AuthLayout;
