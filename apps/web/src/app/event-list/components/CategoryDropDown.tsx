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

export const categories = ["sport", "education", "sport", "sport", "sport"];
export function CategoryDropDown() {

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>City</SelectLabel>
          {categories.map((city, index) => (
            <SelectItem key={index} value={city}>{city}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
