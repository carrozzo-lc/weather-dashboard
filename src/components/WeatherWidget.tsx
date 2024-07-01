'use client';
import { useState } from 'react';
// components
import CitySelect from '@/components/CitySelect';
import Spinner from '@/components/Spinner';
// config
import countries from '@/config/countryList';
import WeatherImage from '@/components/WeatherImage';
import { weatherDescriptions } from "@/config/weatherData";
// types
import { MeteoResponse} from '@/types';
// lib
import { formatDateTime } from '@/lib/formatDateTime';

// ----------------------------------------------------------------------

const WeatherWidget = () => {
  const [weather, setWeather] = useState<MeteoResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const defaultItem = {
    name: "Paris",
    latitude: 48.856613,
    longitude: 2.352222
  };

  const fetchWeatherData = async (latitude: number, longitude: number) => {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

      setIsLoading(true);
      setHasError(false);

      try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.error === true) {
          setHasError(true);
        } else {
          setWeather(data);
        }
      } catch (error) {
        setHasError(true);
        console.error(error)
      } finally {
        setIsLoading(false);
      }
  }; 

  return (
    <div className="max-w-sm">
      <h1 className="text-2xl font-semibold text-center mb-3">Current Weather</h1>
      <p className="text-center mb-6 text-slate-700">Select a city to view its current weather conditions, including temperature, wind speed, and more.</p>

      <CitySelect 
        list={countries}
        defaultItem={defaultItem}
        fetchWeatherData={fetchWeatherData} 
      />

      <div className="bg-white p-8 rounded-2xl mt-4 border border-slate-300">
        {weather ? (
          <div className="block text-center text-slate-900">
            <WeatherImage weatherCode={weather.current_weather.weathercode}/>

            <div className="m-auto text-5xl font-semibold mt-4">
              <div className="inline-block relative">
                {Math.round(weather.current_weather.temperature)}
                <div className="absolute top-0 -right-4 text-sm font-normal">°C</div>
              </div>
            </div>

            <div className="text-slate-700">{weatherDescriptions[weather.current_weather.weathercode]}</div>
            
            <ul className="flex items-start justify-center mt-7 gap-5 mb-5 border-t border-t-slate-300 pt-4">
              <li className="text-center">
                <div>{weather.current_weather.windspeed} km/h</div>
                <div className="text-xs text-slate-400">Wind Speed</div>
              </li>
              <li className="text-center">
                <div>{weather.current_weather.winddirection}°</div>
                <div className="text-xs text-slate-400">Wind Direction</div>
              </li>
              <li className="text-center">
                <div>{weather.elevation}</div>
                <div className="text-xs text-slate-400">Elevation</div> 
              </li>  
            </ul>

            <div className="text-slate-700 pt-2">{formatDateTime()}</div>                     
          </div>
        ) : isLoading ? (
          <Spinner text="Loading..." />
        ) : hasError ? (
          <div>Error while fetching data, try again.</div>
        ) : null}
      </div>

    </div>
  )
};

export default WeatherWidget;