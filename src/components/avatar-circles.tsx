import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Image from "next/image";

export interface AvatarCirclesProps extends HTMLAttributes<HTMLDivElement> {
  numPeople?: number;
  avatarUrls: string[];
}

export default function AvatarCircles({
  numPeople,
  avatarUrls,
  className,
}: AvatarCirclesProps) {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <Image
          key={index}
          src={url}
          alt={`Avatar ${index + 1}`}
          width={32}
          height={32}
          className="rounded-full"
        />
      ))}
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white dark:border-gray-800 dark:bg-white dark:text-black">
        +{numPeople}
      </div>
    </div>
  );
}
