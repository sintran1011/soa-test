import React, { type ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const Title = (props: IProps) => {
  const { children } = props;
  return (
    <div className="flex gap-10 items-center justify-center w-full mb-4">
      <div className="flex-1 border-t border-[#BBBBBB] " />
      {children}
      <div className="flex-1 border-t border-[#BBBBBB] " />
    </div>
  );
};

export default Title;
