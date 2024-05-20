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

export const cities = ["Yogyakarta", "Jakarta", "Bandung", "Surabaya", "Cilacap", "Nganjuk"];
export function SelectDemo() {

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a city" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>City</SelectLabel>
          {cities.map((city, index) => (
            <SelectItem key={index} value={city}>{city}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
