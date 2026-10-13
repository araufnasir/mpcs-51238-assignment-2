"use client";

import * as library from "../../components/liner-notes";
import { createDemos } from "../shared/createDemos";
import type { Kit } from "../shared/types";

const kit: Kit = library;
const demos = createDemos(kit, library.type, "text-ln-muted");

export const ChipsDemo = demos.ChipsDemo;
export const RowsDemo = demos.RowsDemo;
export const SearchDemo = demos.SearchDemo;
export const PanelDemo = demos.PanelDemo;
