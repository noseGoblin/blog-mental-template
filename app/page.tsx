import { Card, CardContent } from '@/components/ui/card';
import { simpleNewsCard } from './lib/interface';
import { client, urlFor } from './lib/sanity';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const revalidate = 30; // revalidate every 30 seconds

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
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-5'>
        {data.map((post, idx) => (
          <Card key={idx} className=''>
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
                <h3 className='font-bold text-lg line-clamp-3 mt-5'>
                  {post.title}
                </h3>
              </Link>
              <p className='text-sm line-clamp-5 mt-3 text-gray-600 dark:text-gray-300'>
                {post.excerpt}
              </p>
              <Button asChild className='w-full mt-7'>
                <Link href={`/news/${post.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
