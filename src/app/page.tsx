"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PostCard } from '@/components/post-card';

const posts = [
  {
    id: 1,
    title: 'Exploring the Alps',
    description: 'A journey through the breathtaking landscapes of the Swiss Alps, from serene lakes to majestic peaks.',
    imageUrl: 'https://placehold.co/600x400.png',
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
      router.push('https://example.com');
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
