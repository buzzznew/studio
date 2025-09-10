"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PostCard } from '@/components/post-card';

const posts = [
  {
    id: 1,
    title: 'Exploring the Alps',
    description: 'A journey through the breathtaking landscapes of the Swiss Alps, from serene lakes to majestic peaks.',
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFgS-VYINT2NsiCqAIc_EP1yrEgmogoaOxwYwsRNs-rYAFjeyAPP8tLgsO2UQA6s-x0dw9rYx983pqDfvAIoD8J01b8ygPYcsN1_NE4_0HsOGAjC04fFRd0GW-e6Gy4StgyQ9aw0aCgr1hswOGYv2NiuvnMRWBnjc6YtjHrdWhTyNuWJzSKQYUa1mT/s200/Screenshot_2022-09-24-22-38-51-61_a23b203fd3aafc6dcb84e438dda678b6.jpg',
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
