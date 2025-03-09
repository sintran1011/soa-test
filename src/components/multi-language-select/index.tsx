"use client";
import React from "react";
import Select from "react-select";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/utils";
import { useLocale } from "next-intl";

const options = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
];

interface IProps {
  className: string;
}
const MultiLanguage = (props: IProps) => {
  const { className } = props;
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const currentLanguage = options.find((i) => i.value === locale);

  const onChangeLanguage = (key: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      { pathname, params },
      { locale: key }
    );
  };
  return (
    <div className={cn("w-[130px]", className)}>
      <Select
        onChange={(val) => onChangeLanguage(val?.value as string)}
        options={options}
        value={currentLanguage}
      />
    </div>
  );
};

export default MultiLanguage;
