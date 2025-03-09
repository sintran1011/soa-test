import Wrapper from "@/components/Wrapper";
import React from "react";
import CrosshairIcon from "@/assets/icons/Crosshair.svg";
import FishingIcon from "@/assets/icons/Fishing.svg";
import MountainsIcon from "@/assets/icons/Mountains.svg";
import ChatsiconIcon from "@/assets/icons/Chatsicon.svg";
import { useTranslations } from "next-intl";

const Banner = () => {
  const t = useTranslations("label");
  const ICONS = [
    {
      label: <MountainsIcon width={40} height={40} color="#F0F0F0" />,
      text: `${t("activity")} 1`,
    },
    {
      label: <FishingIcon width={40} height={40} color="#F0F0F0" />,
      text: `${t("activity")} 2`,
    },
    {
      label: <CrosshairIcon width={40} height={40} color="#F0F0F0" />,
      text: `${t("activity")} 3`,
    },
  ];
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/banner.mov" type="video/mp4" />
      </video>
      <Wrapper className="absolute px-10 border-opa-7 border-t py-5 bottom-[80px] left-1/2 -translate-x-1/2 w-full grid grid-cols-3">
        {ICONS.map((i, idx: number) => (
          <div className="flex-center" key={idx}>
            {i.label}
          </div>
        ))}
      </Wrapper>
      <div className="flex-center size-14 bg-main absolute desktop:right-[142px] desktop:bottom-[104px] rounded-full">
        <ChatsiconIcon width={32} height={32} />
      </div>
    </div>
  );
};

export default Banner;
