import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <main className="flex justify-center container">
      {/* Carousel Mobile start */}

      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full max-w-sm md:hidden"
      >
        <CarouselContent className="gap-36">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <Link href='/event-detail'>
                <div className="w-56 h-64 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative w-full h-32">
                      <Image
                        src={`https://placehold.co/600x400/png `}
                        alt={`Image ${index + 1}`}
                        className="cover"
                        fill
                      />
                    </div>
                    <h2 className="text-lg font-semibold my-5">
                      Title {index + 1}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Description {index + 1}
                    </p>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* Carousel Mobile end */}

      {/* Carousel Desktop Start */}
      <div className="hidden md:flex gap-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <Link href='/event-detail'>
            <div className="w-56 h-64 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-full h-32">
                  <Image
                    src={`https://placehold.co/600x400/png `}
                    alt={`Image ${index + 1}`}
                    className="cover"
                    fill
                  />
                </div>

                <h2 className="text-lg font-semibold my-3">Title {index + 1}</h2>
                <p className="text-sm text-gray-500">Description {index + 1}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Carousel Desktop End */}
    </main>
  );
};

export default Page;
