"use client";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import { cn, generateRandomLocations } from "@/utils";
import { useTranslations } from "next-intl";
import React, {
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import CrosshairIcon from "@/assets/icons/Crosshair.svg";
import FishingIcon from "@/assets/icons/Fishing.svg";
import MountainsIcon from "@/assets/icons/Mountains.svg";
import Image from "next/image";
import { gsap } from "gsap";
import MapPin from "@/components/MapPin";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const ICONS_PIN = [
  {
    icon: <MountainsIcon width={16} height={16} color="#562C2C" />,
  },
  {
    icon: <FishingIcon width={16} height={16} color="#562C2C" />,
  },
  {
    icon: <CrosshairIcon width={16} height={16} color="#562C2C" />,
  },
];

interface ICoordinatorLocation {
  id: string;
  x: number;
  y: number;
  component: ReactNode;
  text: string;
}

const Block2 = () => {
  const t = useTranslations("label");
  const [locations, setLocations] = useState<ICoordinatorLocation[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const randomLocation = generateRandomLocations(3);
    const mapping = ICONS_PIN.map((i, idx: number) => ({
      ...randomLocation[idx],
      component: i.icon,
      text: `${t("activity")} ${idx + 1}`,
    }));
    setLocations(mapping);
  }, []);

  useLayoutEffect(() => {
    if (mapRef.current) {
      Draggable.create(mapRef.current, {
        type: "x,y",
        edgeResistance: 0.9,
        bounds: ".map-container",
        inertia: true,
        onPress: () => setIsDragging(true),
        onRelease: () => setIsDragging(false),
      });
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const buttons = document.querySelectorAll(".zoom-location");
      const isButtonClicked = Array.from(buttons).some((btn) =>
        btn.contains(event.target as Node)
      );

      if (!isButtonClicked) {
        resetZoom();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const renderChip = (item: ICoordinatorLocation, idx: number) => (
    <div
      onClick={() => onZoom(item.x, item.y, idx)}
      key={idx}
      style={{ border: "1.5px solid rgba(242, 84, 45, 0.50)" }}
      className="py-2 zoom-location px-4 flex-center gap-1 bg-white rounded-[40px] cursor-pointer pointer-events-auto"
    >
      <span className="text-[28px] cursor-pointer">{item.component}</span>
      <span className="cursor-pointer">{item.text}</span>
    </div>
  );

  const onZoom = (a: number, b: number, idx: number) => {
    if (!mapRef.current) return;
    const mapRect = mapRef.current.getBoundingClientRect();
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const buttonX = (a / 100) * mapRect.width;
    const buttonY = (b / 100) * mapRect.height;
    const x = centerX - (mapRect.left + buttonX);
    const y = centerY - (mapRect.top + buttonY);

    gsap.to(mapRef.current, {
      x: "+=" + x,
      y: "+=" + y,
      duration: 1,
      ease: "Power1.easeInOut",
    });
    gsap.to(mapRef.current, {
      scale: 2,
      duration: 1,
      ease: "Power1.easeInOut",
    });
    gsap.to(`.location-name-${idx}`, {
      x: 30,
      duration: 0.5,
      ease: "Power1.easeInOut",
      opacity: 1,
    });
  };

  const resetZoom = () => {
    gsap.to(mapRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "Power1.easeInOut",
    });
    gsap.to(`.location-name`, {
      x: 0,
      duration: 0.5,
      ease: "Power1.easeInOut",
      opacity: 0,
    });
  };

  const renderLocationBadge = () => (
    <div className="absolute top-4 left-4 flex items-center gap-1 rounded-lg bg-opa-3 backdrop-blur-default px-[10px] py-1">
      <Image width={40} height={40} alt="sample" src={"/images/sample.png"} />
      <p className="text-md-1 text-sub-3">{t("location")}</p>
    </div>
  );

  return (
    <div
      style={{
        background:
          "url(/images/rocks.png) lightgray -1549.567px -317px / 283.599% 164.948% no-repeat",
      }}
      className={cn("h-[970px] w-full bg-opacity-[0.03]")}
    >
      <Wrapper className="py-[60px]">
        <Title>
          <p className="text-xxl text-main">{`${t("titleBlock")} 2`}</p>
        </Title>
        <div className="flex-center gap-5 w-full">
          {locations.map((i, idx: number) => renderChip(i, idx))}
        </div>
        <div className=" w-full h-[700px] rounded-[20px] overflow-hidden mt-6 relative map-container">
          <div
            ref={mapRef}
            className={cn("absolute size-full map cursor-grab", {
              "cursor-grabbing": isDragging,
            })}
          >
            {renderLocationBadge()}
            <Image
              width={1240}
              height={700}
              src={"/images/map.png"}
              alt="map"
              className="rounded-[20px]"
            />
            {locations.map((loc, idx: number) => (
              <button
                key={loc.id}
                className="absolute cursor-pointer zoom-location"
                style={{
                  left: `${loc.x}%`,
                  top: `${loc.y}%`,
                }}
                onClick={() => onZoom(loc.x, loc.y, idx)}
              >
                <div className="relative">
                  <MapPin>{loc.component}</MapPin>
                  <p
                    className={`text-main text-md-1 absolute top-1/2 -translate-y-1/2 -right-[70px] location-name location-name-${idx} opacity-0`}
                  >
                    {loc.text}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Block2;
