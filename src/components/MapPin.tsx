import React, { type ReactNode } from "react";
import MappinIcon from "@/assets/icons/Mappin.svg";
interface IProps {
  children: ReactNode;
}
const MapPin = (props: IProps) => {
  const { children } = props;
  return (
    <div className="size-fit relative cursor-pointer">
      <span className="cursor-pointer">
        <MappinIcon width={32} height={42} />
      </span>
      <div className="absolute top-1 right-1 flex-center bg-white rounded-full size-6 cursor-pointer">
        {children}
      </div>
    </div>
  );
};

export default MapPin;
