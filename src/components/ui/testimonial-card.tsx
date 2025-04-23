import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define the author type based on the usage in the new TestimonialsSection
export interface TestimonialAuthor {
  name: string;
  handle?: string; // Make handle optional as it might not always be present
  position?: string; // Add position as it exists in current data
  avatar: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string; // Keep href optional
  className?: string;
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
  const AuthorLink = href ? 'a' : 'div'; // Use 'a' tag if href exists

  return (
    <Card className={cn(
      "w-[350px] shrink-0 overflow-hidden", // Fixed width for marquee
      "dark:bg-zinc-800/60 dark:border-zinc-600/50", // Changed base color to lighter gray for dark mode
      "bg-zinc-100/60 border-zinc-200/50", // Increased transparency for light mode bg and border
      className
    )}>
      <CardContent className="p-6 text-sm dark:text-zinc-300 text-zinc-700">
        "{text}"
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <AuthorLink 
          href={href} 
          target={href ? "_blank" : undefined} 
          rel={href ? "noopener noreferrer" : undefined}
          className={cn("flex items-center gap-3", href ? "hover:opacity-80 transition-opacity" : "")}
        >
          <Avatar className="h-9 w-9">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold dark:text-zinc-100 text-zinc-900">{author.name}</span>
            {(author.handle || author.position) && (
              <span className="text-xs dark:text-zinc-400 text-zinc-600">
                {author.handle ? `@${author.handle}` : author.position}
              </span>
            )}
          </div>
        </AuthorLink>
      </CardFooter>
    </Card>
  );
}
