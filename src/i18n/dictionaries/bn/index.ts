import type { Dict } from "./types";
import { nav } from "./nav";
import { common } from "./common";
import { shared } from "./shared";
import { menus } from "./menus";
import { home } from "./home";
import { gen_1 } from "./gen_1";
import { gen_2 } from "./gen_2";
import { gen_3 } from "./gen_3";
import { gen_4 } from "./gen_4";
import { gen_5 } from "./gen_5";
import { gen_6 } from "./gen_6";
import { gen_7 } from "./gen_7";
import { gen_8 } from "./gen_8";
import { gen_9 } from "./gen_9";
import { gen_10 } from "./gen_10";
import { misc } from "./misc";

/** merged Bangla dictionary — add new area files here */
export const bn: Dict = {
  ...nav,
  ...common,
  ...shared,
  ...menus,
  ...home,
  ...gen_1,
  ...gen_2,
  ...gen_3,
  ...gen_4,
  ...gen_5,
  ...gen_6,
  ...gen_7,
  ...gen_8,
  ...gen_9,
  ...gen_10,
  ...misc,
};
