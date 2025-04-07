import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dataColor } from "@/constants/dataColor";

export function ColorFilter() {
  return (
    <Select>
      <SelectTrigger className="w-full  focus-visible:border-none focus-visible:ring-[none] sm:w-[280px] bg-white text-black py-6">
        <SelectValue placeholder="Filtre por cor" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Cores</SelectLabel>
          {dataColor.map((color) => (
            <SelectItem key={color} value={color}>
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color }}
              />
              {color}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
