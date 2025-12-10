import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: { src: string; alt: string }[];
  aspectRatio?: string; // e.g. "aspect-square" or "aspect-video"
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, aspectRatio = "aspect-square", autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={`relative w-full overflow-hidden rounded-xl shadow-lg ${aspectRatio} bg-gray-100`}>
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="min-w-full h-full">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <button 
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute top-1/2 left-2 -translate-y-1/2 w-9 h-9 bg-white/90 border border-primary/20 rounded-full flex items-center justify-center text-primary text-xl shadow-md hover:scale-110 active:scale-95 transition-all z-10"
      >
        ‹
      </button>
      <button 
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute top-1/2 right-2 -translate-y-1/2 w-9 h-9 bg-white/90 border border-primary/20 rounded-full flex items-center justify-center text-primary text-xl shadow-md hover:scale-110 active:scale-95 transition-all z-10"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, idx) => (
          <div 
            key={idx}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer border border-primary/30 ${idx === currentIndex ? 'w-4 bg-primary' : 'w-1.5 bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
