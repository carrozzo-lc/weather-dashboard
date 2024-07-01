'use client';
import { useEffect } from "react";
// ui
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// types 
import { City } from "@/types";

// ----------------------------------------------------------------------

type CitySelectProps = {
  list: City[];
  fetchWeatherData: (latitude: number, longitude: number) => void;
  defaultItem: City;
}

const CitySelect = ({ list, fetchWeatherData, defaultItem }: CitySelectProps) => {

  const onChange = (value: string) => {
    const selectedCountry = JSON.parse(value);
    fetchWeatherData(selectedCountry.latitude, selectedCountry.longitude);
  }

  useEffect(() => {
    fetchWeatherData(defaultItem.latitude, defaultItem.longitude);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultItem.latitude, defaultItem.longitude]);

  return (
    <Select onValueChange={onChange} defaultValue={JSON.stringify(defaultItem)}>
      <SelectTrigger className="w-full rounded-xl border-slate-300 focus:ring-offset-0 focus:ring-0">
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent className="rounded-xl">
        <SelectGroup>
          <SelectLabel>European Countries</SelectLabel>
          {list.map(item => <SelectItem key={item.name} value={JSON.stringify(item)}>{item.name}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
};

export default CitySelect;
