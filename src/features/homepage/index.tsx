"use client";
import React from "react";
import Select from "react-select";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";

const Homepage = () => {
  const options = [
    { value: "en", label: "English" },
    { value: "vi", label: "Vietnam" },
  ];
  const params = useParams();

  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('HomePage');
  const onChangeLanguage = (key: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: key }
    );
  };
  return (
    <div>
      <p className="text-red-500">Homepage</p>
      <p onClick={()=>onChangeLanguage('en')}>English</p>
      <p onClick={()=>onChangeLanguage('vi')}>Vietnam</p>
      <Select
        onChange={(val) => onChangeLanguage(val?.value as string)}
        options={options}
      />
      <p>{t("title")}</p>
    </div>
  );
};

export default Homepage;
