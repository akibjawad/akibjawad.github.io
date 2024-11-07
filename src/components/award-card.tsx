import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Markdown from "react-markdown";

interface AwProps {
  title: string;
  description: string;
  dates: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function AwardCard({
  title,
  description,
  dates,
  image,
  links,
}: AwProps) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain w-16 h-16" />
          <AvatarFallback>{title.trim().split(" ")[0]}</AvatarFallback>
        </Avatar> 
      </div>
      <div className="flex-row gap-1">
        <div className="flex flex-col md:flex-row justify-between">
            <h2 className="font-bold text-lg leading-none">{title}</h2>
            {dates && (
            <time className="text-base text-muted-foreground">{dates}</time>
            )}
        </div>
        {description && (
          <p className="prose dark:prose-invert text-base text-muted-foreground max-w-full">
            {description}
          </p>
        )}
        
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx} target="_blank" >
              <Badge key={idx} title={link.title} className="flex font-semibold text-sm gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
