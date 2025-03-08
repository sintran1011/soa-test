"use client";
import React from "react";
import { useTranslations } from "next-intl";

const Homepage = () => {
  const t = useTranslations("HomePage");

  return (
    <div>
      <p>{t("title")}</p>
    </div>
  );
};

export default Homepage;
