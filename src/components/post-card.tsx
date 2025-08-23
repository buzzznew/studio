import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type Post = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export function PostCard({ post }: { post: Post }) {
  return (
    <Card className="w-full max-w-2xl overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-2xl dark:bg-card">
      <CardContent className="p-0">
        <div className="relative w-full aspect-[3/2]">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint={post.imageHint}
            priority={post.id === 1}
          />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight md:text-3xl">{post.title}</CardTitle>
        <CardDescription className="pt-2 text-base">{post.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end gap-4 p-6 bg-muted/30">
        <Button size="lg" className="animate-pulse-continuous bg-primary hover:bg-primary/90 text-primary-foreground">Watch More</Button>
        <Button size="lg" variant="outline" className="animate-glow-border">Download</Button>
      </CardFooter>
    </Card>
  );
}
