"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PostCard } from '@/components/post-card';

const posts = [
  {
    id: 1,
    title: 'Desi Full Movie',
    description: 'A journey through the breathtaking landscapes of the Swiss Alps, from serene lakes to majestic peaks.',
    imageUrl: 'https://media.istockphoto.com/id/169879328/photo/sultry-in-the-sun.jpg?s=2048x2048&w=is&k=20&c=Qmsja75CuTyvxIP4qYAUO1iYlY7OHO2uYo-dy_KLKLg=',
    imageHint: 'mountains landscape'
  },
  {
    id: 2,
    title: 'The Art of Minimalist Design',
    description: 'Discover how less is more in the world of design, creating clean, elegant, and functional aesthetics.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'minimalist interior'
  },
  {
    id: 3,
    title: 'Urban Jungle: A City Photography Guide',
    description: 'Capture the vibrant energy and hidden beauty of city life with our essential tips for urban photographers.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'city skyline'
  }
];

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Replace this URL with your custom URL
      router.push('https://p.ketosud.com/top-5-hospitals-in-chennai-overview-facilities-expenses/?utm_source=BMW&utm_medium=Ss_pro');
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [router]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center space-y-12 p-4 pt-12 sm:p-8 md:p-16">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
