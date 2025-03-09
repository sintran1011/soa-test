import Wrapper from "@/components/Wrapper";
import { useTranslations } from "next-intl";
import React from "react";
import CrosshairIcon from "@/assets/icons/Crosshair.svg";
import FishingIcon from "@/assets/icons/Fishing.svg";
import MountainsIcon from "@/assets/icons/Mountains.svg";
import ArrowUpRightIcon from "@/assets/icons/ArrowUpRight.svg";
import MultiLanguage from "@/components/multi-language-select";
import { cn } from "@/utils";

const ICONS = [
  { label: <MountainsIcon width={28} height={28} color="#F0F0F0" /> },
  { label: <FishingIcon width={28} height={28} color="#F0F0F0" /> },
  { label: <CrosshairIcon width={28} height={28} color="#F0F0F0" /> },
  {
    label: (
      <div className="bg-main w-16 h-10 rounded-[32px] flex-center">
        <ArrowUpRightIcon
          className="pl-1"
          width={24}
          height={24}
          color="white"
        />
      </div>
    ),
  },
];

const Header = () => {
  const t = useTranslations("label");

  const renderIcon = () => (
    <div className="flex gap-4 items-center w-[350px]">
      {ICONS.map((i) => i.label)}
      <MultiLanguage className="ml-6" />
    </div>
  );

  const renderTitle = () => (
    <div className="flex gap-6 flex-1">
      {[
        "desktop:w-[173px] w-[55px]",
        "desktop:w-[124px] w-[55px]",
        "desktop:w-[95px] w-[55px]",
        " w-[55px]",
      ].map((i: string, idx: number) => {
        return (
          <p className={cn(`${i} text-opa-6`)} key={idx}>
            {t("title")} {idx + 1}
          </p>
        );
      })}
    </div>
  );

  return (
    <div className="fixed top-0 left-0 z-50 backdrop-blur-[8px] w-full border-b border-opa-1 py-3 bg-opa-4">
      <Wrapper className="">
        <div className="flex-center justify-between ">
          <div className="flex items-center flex-1">
            <p className="text-white text-xs mr-[93px] w-[105px]">
              LOGO SAMPLE
            </p>
            {renderTitle()}
          </div>
          {renderIcon()}
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
