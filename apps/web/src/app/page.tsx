'use client';
import { Footer } from '@/components/Footer';
// import {Category} from "@/components/Category"
import Category from './components/Category/page';
import City from './components/City/page';
import FilterEvent from './components/FilterEvent/page';
import MoreEvents from './components/MoreEvents/page';
const Home = () => {
  return (
    <main className="h-screen flex flex-col">
      {/* jumbotron start */}
      <div className='md:container'>
        <div className='h-36 md:h-96  border-2 rounded-lg m-4 flex flex-col text-center justify-center'>
          <h1 className="text-xl">halo</h1>
        </div>
      </div>
      {/* jumbotron end */}
      <Category />
      <City />

      <div className="py-6 md:container">
        <h1 className="font-bold text-2xl mb-8 ml-[2rem]">
          Event in Yogyakarta
        </h1>
        <div className="mb-8">
          <FilterEvent />
        </div>
        <h1 className="font-bold text-2xl mb-8 ml-[2rem]">More events</h1>
        <div className="mb-8">
          <MoreEvents />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
