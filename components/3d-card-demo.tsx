"use client"

import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Link from "next/link"
import { simpleNewsCard } from '@/app/lib/interface';
import { client, urlFor } from '@/app/lib/sanity';


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

export default async function ThreeDCardDemo() {
  const data: simpleNewsCard[] = await getData();

  return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-5'>
      {data.map((post, idx) => (
        <CardContainer key={idx} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <Link href={`/news/${post.currentSlug}`}>
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            <h6 className='line-clamp-3'>
                  {post.title}
                </h6>
            </CardItem>
            </Link>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            {post.excerpt}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={urlFor(post.image).url()}
                alt={post.title}
                width={600}
                height={400}
                className="h-[200px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
              />
            </CardItem>
            <div className="flex justify-between items-center w-full mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href={`/news/${post.currentSlug}`}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <Link href={`/news/${post.currentSlug}`}>Try now →</Link>
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <Link href={`/news/${post.currentSlug}`}>Read more</Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
  </div>
  )
}