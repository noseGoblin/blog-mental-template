import { fullArticle } from '@/app/lib/interface';
import { client, urlFor } from '@/app/lib/sanity';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 30; // revalidate every 30 seconds

async function getData(slug: string) {
  const query = `
  *[_type == 'news' && slug.current == '${slug}'] {
    'currentSlug': slug.current,
      title,
      image,
      body,
      date,
      'currentCat': categories[0],
      'authorName': author->name,
      // 'authorLink': author->slug.current,
      // author->{
      //   name,
      //   // headshot,
      // }
  }[0]`;

  const data = await client.fetch(query);
  console.log(data);
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
          <span className='font-bold'>
            {/* <Link href={`/author/${data.authorLink}`}> */}
            {data.authorName}
            {/* </Link> */}
          </span>
          {' - '}
          {newDate}
        </span>
      </div>

      <div className='mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary'>
        <PortableText value={data.body} />
      </div>
    </div>
  );
}
