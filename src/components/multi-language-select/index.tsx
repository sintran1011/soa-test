import React from "react";
import Select from "react-select";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";

const options = [
  { value: "en", label: <p>English</p> },
  { value: "vi", label: "Vietnam" },
];
const MultiLanguage = () => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const onChangeLanguage = (key: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      { pathname, params },
      { locale: key }
    );
  };
  return (
    <Select
      onChange={(val) => onChangeLanguage(val?.value as string)}
      options={options}
    />
  );
};

export default MultiLanguage;
