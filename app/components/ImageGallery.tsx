'use client';

import Image from 'next/image';
import { useState } from 'react';
import { urlFor } from '@/app/lib/sanity';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function ImageGallery({ props }: { props: any }) {
  const [index, setIndex] = useState(0);

  const { images } = props;
  let image = images[index];

  function handlePrevious(e: any) {
    e.stopPropagation();
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function handleNext(e: any) {
    e.stopPropagation();
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className='flex flex-col gap-4 my-5'>
      <Image
        key={image._key}
        src={image.asset ? urlFor(image).width(800).height(400).url() : ''}
        width={800}
        height={400}
        alt={image.alt}
        className='h-[200px] sm:h-[400px] lg:h-[600px] object-cover'
      />
      <div className='w-full flex flex-col sm:flex-row items-center justify-between gap-3'>
        <div className='text-left text-sm'>{image.alt}</div>
        <div className='flex gap-4'>
          <button
            onClick={(e) => handlePrevious(e)}
            className='p-3 bg-zinc-900 transition border border-zinc-900 hover:border-zinc-800'
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={(e) => handleNext(e)}
            className='p-3 bg-zinc-900 transition border border-zinc-900 hover:border-zinc-800'
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
