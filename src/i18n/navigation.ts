import { createNavigation } from "next-intl/navigation";
import { initConfig } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(initConfig);
