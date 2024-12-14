import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { MdOutlineFormatQuote } from "react-icons/md";

const reviews = [
  {
    author: "Michael Wesche",
    text: "Ein nettes kleines Zentrum, wo man als Patient gut aufgehoben ist. Ich gehe dort sehr gerne hin wenn ich doch noch lieber darauf verzichten könnte!",
    rating: 5,
    company: "Google",
    position: "Patient",
  },
  {
    author: "Detlef Scholze",
    text: "Bin sehr zufrieden, sehr professionell und geschult, fühl mich gut aufgehoben.",
    rating: 5,
    company: "Google",
  },
  {
    author: "Gelbe Seiten",
    text: "Sehr liebe Leute mit einem sehr umfangreichen Wissen. Top Wiederherstellung !!!",
    rating: 5,
    company: "Google",
  },

  {
    author: "diegooo92",
    text: "⭐⭐⭐⭐⭐",
    rating: 5,
    company: "Google",
  },
  {
    author: "S. Fischer",
    text: "⭐⭐⭐⭐⭐",
    rating: 5,
    company: "Google",
  },
  {
    author: "Dominik Grimpe",
    text: "⭐⭐⭐⭐⭐",
    rating: 5,
    company: "Google",
  },
  {
    author: "Heiko Frenkel",
    text: "⭐⭐⭐⭐⭐",
    rating: 5,
    company: "Google",
  },
];

export default function Component() {
  return (
    <Section
      title="Kundenbewertungen"
      subtitle="Was unsere Kunden über uns sagen"
    >
      <Carousel>
        <div className="max-w-2xl mx-auto relative">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <div className="p-2 pb-5">
                  <div className="text-center">
                    <MdOutlineFormatQuote className="text-4xl text-themeDarkGray my-4 mx-auto" />
                    <BlurFade delay={0.25} inView>
                      <div className="flex justify-center mb-4">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">
                            ★
                          </span>
                        ))}
                      </div>
                      <h4 className="text-1xl font-semibold max-w-lg mx-auto px-10">
                        {review.text}
                      </h4>
                    </BlurFade>
                    <BlurFade delay={0.25 * 2} inView>
                      <div className="mt-8">
                        <Image
                          width={0}
                          height={40}
                          src="https://cdn.magicui.design/companies/Google.svg"
                          alt="Google Logo"
                          className="mx-auto w-auto h-[40px] grayscale opacity-30"
                        />
                      </div>
                    </BlurFade>
                    <div className="">
                      <BlurFade delay={0.25 * 3} inView>
                        <h4 className="text-1xl font-semibold my-2">
                          {review.author}
                        </h4>
                      </BlurFade>
                    </div>
                    {review.position && (
                      <BlurFade delay={0.25 * 4} inView>
                        <div className="mb-3">
                          <span className="text-sm text-themeDarkGray">
                            {review.position}
                          </span>
                        </div>
                      </BlurFade>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-2/12 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-2/12 bg-gradient-to-l from-background"></div>
        </div>
        <div className="md:block hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Section>
  );
}
