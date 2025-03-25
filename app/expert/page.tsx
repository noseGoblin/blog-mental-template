import { simpleBioCard } from '../lib/interface';
import { client, urlFor } from '../lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

export const revalidate = 6; // revalidate every 30 seconds

async function getData() {
  const query = `
  *[_type == 'author'] | order(priority asc, _updatedAt desc)  {
    name,
    credentials,
    'currentSlug': slug.current,
    headshot,
    priority,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function ExpertAuthors() {
  const data: simpleBioCard[] = await getData();

  return (
    <div className='w-full h-screen py-5'>
      <div className='w-full h-full grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-5 items-start justify-between '>
        {data.map((post, idx) => (
          <CardContainer
            key={idx}
            className='w-full h-full min-w-[275px] min-h-[420px]'
          >
            <CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col justify-center items-stretch'>
              <Link href={`/expert/${post.currentSlug}`}>
                <CardItem
                  translateZ='100'
                  className='w-full mt-0 self-center justify-center'
                >
                  <Image
                    src={urlFor(post.headshot).url()}
                    alt={post.name}
                    width={150}
                    height={150}
                    className='h-full object-cover rounded-xl'
                    loading='lazy'
                  />
                </CardItem>
                <CardItem
                  translateZ='50'
                  className='text-lg font-bold text-neutral-600 dark:text-white leading-none mt-6 mb-1'
                >
                  <h4>{post.name}</h4>
                </CardItem>
                <CardItem
                  as='p'
                  translateZ='60'
                  className='text-neutral-500 text-sm max-w-sm mt-0 dark:text-neutral-300'
                >
                  {post.credentials}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as='button'
                  className='w-full py-2 rounded-xl bg-primary text-white text-xs font-bold'
                >
                  Learn More
                </CardItem>
              </Link>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
