'use client';
import { useState } from 'react';
// components
import CitySelect from '@/components/CitySelect';
import Spinner from '@/components/Spinner';
// config
import countries from '@/config/countryList';

// ----------------------------------------------------------------------

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchWeatherData = async (latitude: number, longitude: number) => {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

      setIsLoading(true);

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        
        if (data.error === true) {
          setHasError(true);
        } else {
          setWeather(data.current_weather);
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
      <p className="text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id felis eu odio scelerisque tincidunt. </p>

      <CitySelect 
        list={countries} 
        fetchWeatherData={fetchWeatherData} 
      />

      <div className="bg-white p-8 rounded-2xl mt-6 border border-slate-300">
        {weather ? (
          <div>{weather.weathercode}</div>
        ) : isLoading ? (
          <Spinner text="Loading..." />
        ) : hasError ? (
          <div>Error while fetching data, try next time.</div>
        ) : null}
      </div>

    </div>
  )
};

export default WeatherWidget;