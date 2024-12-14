"use client";

import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";

export default function DrawerDemo() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setOpen(false); // Close drawer before navigation
    router.push(href);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <IoMenuSharp className="text-2xl" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="px-6">
          <div className="">
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("/");
              }}
              title="brand-logo"
              className="relative mr-6 flex items-center space-x-2"
            >
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </Link>
          </div>
          <nav>
            <ul className="mt-7 text-left">
              {siteConfig.header.map((item, index) => (
                <li key={index} className="my-3">
                  {item.trigger ? (
                    <span className="font-semibold">{item.trigger}</span>
                  ) : (
                    <Link
                      href={item.href || ""}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.href || "");
                      }}
                      className="font-semibold"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </DrawerHeader>
        <DrawerFooter>
          <Link
            href="/kontakt"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("/kontakt");
            }}
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full sm:w-auto text-background flex gap-2"
            )}
          >
            Kontakt
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
