import { bioPage } from '@/app/lib/interface';
import { client, urlFor } from '@/app/lib/sanity';
import { Button } from '@/components/ui/button';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 30; // revalidate every 30 seconds

async function getData(slug: string) {
  const query = `
  *[_type == 'author' && slug.current == '${slug}'] {
    'currentSlug': slug.current,
      name,
      credentials,
      headshot,
      body,
      'currentCat': categories[0],
      email,
      linkedin,
      twitter,
      facebook,
      instagram,
      website,
  }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function ExpertAuthor({
  params,
}: {
  params: { slug: string };
}) {
  const data: bioPage = await getData(params.slug);

  return (
    <div className='max-w-5xl mx-auto'>
      <h1>
        <span className='block text-base text-center text-primary font-semibold tracking-wide uppercase'>
          alliantgroup - Experts
        </span>
      </h1>
      <div className='flex flex-col md:flex-row gap-6 md:gap-12 my-2 md:my-6 p-6'>
        <div className='w-full md:w-1/3'>
          <Image
            src={urlFor(data.headshot).url()}
            width={300}
            height={300}
            alt={data.headshot.alt}
            title={data.headshot.alt}
            priority
            className='rounded-lg mt-8 object-cover mx-auto'
          />
        </div>
        <div className='w-full md:w-2/3 gap-2'>
          <h2>
            <span className='block text-3xl font-bold tracking-tight leading-8 sm:text-4xl mt-8'>
              {data.name}
            </span>
          </h2>
          <Button className='w-full py-6 my-6 text-lg'>
            <Link href={`mailto:${data.email}`}>Email {data.name}</Link>
          </Button>
          <div>
            <span className='block text-2xl leading-8'>{data.credentials}</span>
          </div>
          <div className='mt-6 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary'>
            <PortableText value={data.body} />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
