// import ImageGallery from '@/app/components/ImageGallery';
import { SignupForm } from '@/app/components/SignupForm';
import ImageGallery from '@/app/components/ImageGallery';
import { fullArticle } from '@/app/lib/interface';
import { client, urlFor } from '@/app/lib/sanity';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { CalendarDays } from 'lucide-react';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 600; // revalidate every 30 seconds

async function getData(slug: string) {
  const query = `
  *[_type == 'news' && slug.current == '${slug}'] {
    'currentSlug': slug.current,
      title,
      image,
      body,
      date,
      imageGallery,
      'images': imageGallery.images[],
      'currentCat': categories[0]->name,
      'authorName': author->name,
      'authorLink': author->slug.current,
      'authorImage': author->headshot,
      'authorTitle': author->credentials,
      categories[]->{
        name,
        'catSlug': slug.current,
        slug,
      },
  }[0]`;
  const data = await client.fetch(query);

  return data;
}

export default async function NewsArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullArticle = await getData(params.slug);
  const newDate = new Date(data.date).toLocaleDateString('en-US');

  return (
    <div>
      <h1>
        <span className='block text-base text-center text-primary font-semibold tracking-wide uppercase'>
          alliantgroup - News
        </span>
        <span className='block text-3xl text-center font-bold tracking-tight leading-8 sm:text-4xl mt-8'>
          {data.title}
        </span>
      </h1>
      <div className='w-full flex flex-row gap-2 mt-6'>
        {Array.from(data.categories).map((cat, index) => (
          <Badge key={index}>{cat.name}</Badge>
        ))}
      </div>

      <Image
        src={urlFor(data.image).url()}
        width={800}
        height={800}
        alt={data.image.alt}
        title={data.image.alt}
        priority
        className='rounded-lg h-[400px] border mt-8 object-cover mx-auto'
      />

      <div className='mt-1 text-right'>
        <span className=' text-sm'>
          By{' '}
          <HoverCard>
            <HoverCardTrigger>
              <span className='font-bold'>
                <Link href={`/expert/${data.authorLink}`}>
                  {data.authorName}
                </Link>
              </span>
            </HoverCardTrigger>
            <HoverCardContent className='w-80'>
              <div className='flex justify-between space-x-4'>
                <Avatar>
                  <AvatarImage src={urlFor(data.authorImage).url()} />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className='space-y-1'>
                  <h4 className='text-sm font-semibold'>{data.authorName}</h4>
                  <p className='text-sm'>{data.authorTitle}</p>
                  <div className='flex items-center pt-2'>
                    <CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
                    <span className='text-xs text-muted-foreground'>
                      Joined December 2018
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          {' - '}
          {newDate}
        </span>
      </div>

      <div className='mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary'>
        <PortableText value={data.body} />
      </div>

      {data.imageGallery ? (
        <div className='my-12'>
          <ImageGallery props={data.imageGallery} />
        </div>
      ) : null}

      {data.imageGallery ? (
        <div className='my-12'>
          <Carousel className='w-[85%] md:w-full mx-auto'>
            <CarouselContent>
              {Array.from(data.images).map((image, index) => (
                <CarouselItem key={index}>
                  <div className=''>
                    <Card>
                      <CardContent className='flex items-start justify-start p-0'>
                        <span className='content-start'>
                          <Image
                            src={urlFor(image).width(800).height(400).url()}
                            alt={image.alt}
                            width={800}
                            height={400}
                            className='object-cover rounded-t-lg'
                          />
                          {/* {index + 1} */}
                        </span>
                      </CardContent>
                      <p className='w-full p-4'>{image.alt}</p>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : null}

      <div className='flex flex-col py-6 mx-auto'>
        <SignupForm />
      </div>
    </div>
  );
}
