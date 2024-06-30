'use client';
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
}

const CitySelect = ({ list, fetchWeatherData }: CitySelectProps) => {

  const onChange = (value: string) => {
    const selectedCountry = JSON.parse(value);
    fetchWeatherData(selectedCountry.latitude, selectedCountry.longitude)
  }

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>European Countries</SelectLabel>
          {list.map(item => <SelectItem key={item.name} value={JSON.stringify(item)}>{item.name}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
};

export default CitySelect;
