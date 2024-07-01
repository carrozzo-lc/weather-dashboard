// next
import Image from "next/image";
// config
import { weatherImages } from "@/config/weatherData";
// types
import { WeatherCode } from "@/types";

// ----------------------------------------------------------------------

type WeatherImageProps = {
  weatherCode: WeatherCode;
}

const WeatherImage = ({ weatherCode }: WeatherImageProps) => {
  const imageUrl = weatherImages[weatherCode] || 'unknown.svg'; // default to 'unknown.png' if code is not found

  return (
    <div className="flex justify-center items-center h-[110px] w-auto"> {/* Tailwind classes for fixed height and width */}
      <Image
        src={`/weather-icons/${imageUrl}`}
        width={120}
        height={200}
        alt="Weather Icon"
        className="object-contain h-full w-full"
      />
    </div>
  )
}

export default WeatherImage;