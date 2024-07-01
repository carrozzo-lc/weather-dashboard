import WeatherWidget from '@/components/WeatherWidget';

// ----------------------------------------------------------------------

const Home = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-20 bg-gradient-to-b from-blue-50 to-blue-300">
      <WeatherWidget />
    </main>
  );
}

export default Home;
