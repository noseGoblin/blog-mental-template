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
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: simpleBlogCard = await getData();

  console.log(data);
  return (
    <div className='w-full h-screen py-5'>
      <h1>New alliangroup Blog</h1>
    </div>
  );
}
