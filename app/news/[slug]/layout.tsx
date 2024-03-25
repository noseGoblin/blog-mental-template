export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className='max-w-3xl mx-auto'>{children}</div>
    </section>
  );
}
