import type { Dict } from "./types";
import { nav } from "./nav";
import { common } from "./common";
import { shared } from "./shared";
import { menus } from "./menus";

/** merged Bangla dictionary — add new area files here */
export const bn: Dict = {
  ...nav,
  ...common,
  ...shared,
  ...menus,
};
