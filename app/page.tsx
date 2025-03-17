import { Card, CardContent } from '@/components/ui/card';
import { simpleNewsCard } from './lib/interface';
import { client, urlFor } from './lib/sanity';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import ThreeDCardDemo from '@/components/3d-card-demo';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"

export const revalidate = 600; // revalidate every 30 seconds

async function getData() {
  const query = `
  *[_type == 'news'] | order(date desc) {
    title,
    author,
    'currentSlug': slug.current,
    'currentCat': categories[],
    date,
    image,
    excerpt,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: simpleNewsCard[] = await getData();

  return (
    <div className='w-full h-screen py-5'>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-5 items-start justify-between '>
        {data.map((post, idx) => (
          <CardContainer key={idx} className='max-w-[400px]'>
            <CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
              <Link href={`/news/${post.currentSlug}`}>
                <CardItem translateZ='100' className='w-full mt-0'>
                  <Image
                    src={urlFor(post.image).url()}
                    alt={post.title}
                    width={600}
                    height={400}
                    className='dark:border-white/[0.2] border-black/[0.1] border h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                    loading='lazy'
                  />
                </CardItem>
                <CardItem
                  translateZ='50'
                  className='text-lg font-bold text-neutral-600 dark:text-white leading-none mt-6 mb-2 line-clamp-3'
                >
                  <h4>{post.title}</h4>
                </CardItem>
                <CardItem
                  as='p'
                  translateZ='60'
                  className='text-neutral-500 text-sm max-w-sm mt-0 dark:text-neutral-300'
                >
                  {post.excerpt}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as='button'
                  className='w-full py-2 rounded-xl bg-primary text-white text-xs font-bold'
                >
                  Read More
                </CardItem>
              </Link>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* <ThreeDCardDemo props={data} />
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-5'>
        {data.map((post, idx) => (
          <Card key={idx} className='bg-white dark:bg-gray-900'>
            <Link href={`/news/${post.currentSlug}`}>
              <Image
                src={urlFor(post.image).url()}
                alt={post.title}
                width={600}
                height={400}
                className='rounded-t-lg h-[200px] object-cover'
              />
            </Link>
            <CardContent className=''>
              <Link href={`/news/${post.currentSlug}`}>
                <h3 className='font-bold text-lg line-clamp-3 mt-5 dark:text-gray-200'>
                  {post.title}
                </h3>
              </Link>
              <p className='text-sm line-clamp-5 mt-3 text-gray-600 dark:text-gray-400'>
                {post.excerpt}
              </p>
              <Button asChild className='w-full mt-7 text-white'>
                <Link href={`/news/${post.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </div>
  );
}
