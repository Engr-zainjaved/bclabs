import AssetsCard from '@/components/assets_card/AssetsCard';
import Header from '@/components/header/Header';
import HeroSection from '@/components/hero_section/HeroSection';
import SwapTokenCard from '@/components/swap_token_card/SwapTokenCard';

const Home = () => {
  return (
    <main className="space-y-24 mt-5 mb-28 ">
      <Header />
      <HeroSection />
      <div className="flex flex-col items-center">
        <AssetsCard />
      </div>

      <SwapTokenCard />
    </main>
  );
};

export default Home;
