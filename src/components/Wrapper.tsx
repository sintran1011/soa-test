import { cn } from "@/utils";
import React, { type ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Wrapper = (props: IProps) => {
  const { children, className } = props;
  return <div className={cn("container mx-auto", className)}>{children}</div>;
};

export default Wrapper;
