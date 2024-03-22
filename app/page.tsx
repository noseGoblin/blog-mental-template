import { Card } from '@/components/ui/card';
import { simpleBlogCard } from './lib/interface';
import { client } from './lib/sanity';

async function getData() {
  const query = `
  *[_type == 'blog'] | order(date desc) {
    title,
    author,
    'currentSlug': slug.current,
    'currentCat': categories[],
    date,
    image,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  console.log(data);
  return (
    <div className='w-full h-screen py-5'>
      <div className='grid grid-cols-1 lg:grid-cols-4 mt-5'>
        {data.map((post) => (
          <Card key={post.currentSlug} data={post} />
        ))}
      </div>
    </div>
  );
}
