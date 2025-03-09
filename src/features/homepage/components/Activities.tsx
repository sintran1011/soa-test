'use client'
import CustomCalendar from "@/components/calendar";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import { useTranslations } from "next-intl";
import React from "react";

const Activities = () => {
  const t = useTranslations("label");
  return (
    <Wrapper className="py-[60px]">
      <Title>
        <p className="text-xxl text-main">{t("ourActivities")}</p>
      </Title>
      <CustomCalendar />
    </Wrapper>
  );
};

export default Activities;
