async function getData() {
  const query = `
  *[_type == 'blog'] | order(date desc) {
    title,
    author,
    'currentSlug': slug.current,
    'currentCat': categories[],
    date,
  }`;
}

export default function Home() {
  return (
    <div className='w-full h-screen py-5'>
      <h1>New alliangroup Blog</h1>
    </div>
  );
}
