import { Footer } from '@/components/Footer';
import { Mail } from 'lucide-react';
import React from 'react';

const eventDetail = () => {
  return (
    <main>
        <div className='container h-screen flex justify-center items-center'>
            <h1 className='text-5xl'>event detail</h1>
            <Mail/>
        </div>
      <Footer />
    </main>
  );
};

export default eventDetail;
