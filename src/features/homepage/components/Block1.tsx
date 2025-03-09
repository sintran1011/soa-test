import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { type ReactNode } from "react";
import ArrowUpRightIcon from "@/assets/icons/ArrowUpRight.svg";

interface Card {
  image: ReactNode;
  title: string;
  subTitle: string;
  description: string;
}

const BLOCK_CARDS = [
  {
    image: (
      <Image
        width={397}
        height={397}
        objectFit="cover"
        alt="block_image"
        src="/images/block1.png"
      />
    ),
    title: "Case  Title",
    subTitle: "Case sous-titre",
    description:
      "Chaque sentier vous conduit à des panoramas époustouflants, chaque instant devient une aventure, chaque rencontre vous promet un so uvenir marquant. Avec MITIK, le tourisme d’aventure allie nature brute et confort raffiné à toutes les saisons. Randonnée, canoë, observation de la faune, rencontres culturelles, exploration en montagne, chaque escapade est une immersion inoubliable dans les grands espaces canadiens. ",
  },
  {
    image: (
      <Image
        width={397}
        height={397}
        objectFit="cover"
        alt="block_image"
        src="/images/block2.png"
      />
    ),
    title: "Case  Title",
    subTitle: "Case sous-titre",
    description:
      "Chaque sentier vous conduit à des panoramas époustouflants, chaque instant devient une aventure, chaque rencontre vous promet un so uvenir marquant. Avec MITIK, le tourisme d’aventure allie nature brute et confort raffiné à toutes les saisons. Randonnée, canoë, observation de la faune, rencontres culturelles, exploration en montagne, chaque escapade est une immersion inoubliable dans les grands espaces canadiens. ",
  },
  {
    image: (
      <Image
        width={397}
        height={397}
        objectFit="cover"
        alt="block_image"
        src="/images/block3.png"
      />
    ),
    title: "Case  Title",
    subTitle: "Case sous-titre",
    description:
      "Chaque sentier vous conduit à des panoramas époustouflants, chaque instant devient une aventure, chaque rencontre vous promet un so uvenir marquant. Avec MITIK, le tourisme d’aventure allie nature brute et confort raffiné à toutes les saisons. Randonnée, canoë, observation de la faune, rencontres culturelles, exploration en montagne, chaque escapade est une immersion inoubliable dans les grands espaces canadiens. ",
  },
];

const Block1 = () => {
  const t = useTranslations("label");

  const renderCard = (item: Card, idx: number) => (
    <div className="flex flex-col gap-6 odd:mt-[45px]">
      <div className="desktop:size-[397px]">{item.image}</div>
      <div className="w-full">
        <p className="text-md-1 text-main mb-2">{item.title}</p>
        <p className="text-lg text-sub-3 mb-4">{item.subTitle}</p>
        <p className="text-opa-5 mb-4 line-clamp-2">
          {item.description}
        </p>
      </div>
      <div className="flex-center h-11 w-[249px] gap-1 border-[1.5px] rounded-[333px] border-solid border-opa-8">
        {t("package")} {idx + 1}
        <ArrowUpRightIcon width={24} height={24} color="#0E9594" />
      </div>
    </div>
  );

  return (
    <Wrapper className="relative py-[60px]">
      <Title>
        <p className="text-xxl text-main">{`${t("titleBlock")} 1`}</p>
      </Title>
      <p className="text-md text-center text-sub-3 mb-10">{`${t("subtitleBlock")} 1`}</p>
      <div className="grid grid-cols-3 gap-6">
        {BLOCK_CARDS.map((i, idx) => renderCard(i, idx))}
      </div>
    </Wrapper>
  );
};

export default Block1;
