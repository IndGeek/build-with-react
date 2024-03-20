import Link from 'next/link';

const pages = [
  { title: 'Debounce', link: '/debounce' },
  { title: 'Search', link: '/search' },
  { title: 'Skeleton', link: '/skeleton' },
  { title: 'Pagination', link: '/pagination' },
  { title: 'Lottie', link: '/lottie' },
  { title: 'Tabs', link: '/tabs' }
];

export default function Home() {
  return (
    <div className='h-screen flex justify-center items-center px-4'>
      <div className='wrapper grid grid-cols-2 md:grid-cols-3 gap-5 items-center'>
        {pages.map((page, index) => (
          <Link key={index} href={page.link} className="text-center p-4 md:p-8 text-white bg-indigo-500 hover:bg-indigo-600 hover:scale-[1.06] duration-300 transition-all rounded-lg border-2">{page.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
