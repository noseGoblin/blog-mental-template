import { fullCategory } from '@/app/lib/interface';
import { client } from '@/app/lib/sanity';
import { PortableText } from 'next-sanity';

export const revalidate = 30; // revalidate every 30 seconds

async function getData(slug: string) {
  const query = `
  *[_type == 'category' && slug.current == '${slug}'] {
    'currentSlug': slug.current,
      name,
      description,
  }[0]`;
  const data = await client.fetch(query);

  return data;
}

export default async function CategoryArchive({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullCategory = await getData(params.slug);

  return (
    <div>
      <h1>
        <span className='block text-base text-center text-primary font-semibold tracking-wide uppercase'>
          alliantgroup - Category
        </span>
        <span className='block text-3xl text-center font-bold tracking-tight leading-8 sm:text-4xl mt-8'>
          {data.name}
        </span>
      </h1>
      <div className='w-full flex flex-row gap-2'>
        {data.description ? (
          <div className='mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary'>
            <PortableText value={data.description} />
          </div>
        ) : (
          <span>There is no description for this category.</span>
        )}
      </div>
    </div>
  );
}
