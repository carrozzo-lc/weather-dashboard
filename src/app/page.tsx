import WeatherWidget from '@/components/WeatherWidget';

// ----------------------------------------------------------------------

const Home = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-24 bg-gradient-to-b from-blue-50 to-blue-300">
      <WeatherWidget />
    </main>
  );
}

export default Home;
