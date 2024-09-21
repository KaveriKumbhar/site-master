import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/global/mode-toggle";
import { pricingCards } from "@/lib/constants";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { Check } from "lucide-react";
import Component_83613467_e5ba_4c25_981b_f93c02a35ca3 from "@/components/Component_83613467_e5ba_4c25_981b_f93c02a35ca3";

export default function Home() {
  return (
    <>
      <section className="w-full h-full pt-20 md:pt-36 relative flex items-center justify-center flex-col overflow-hidden">
        {/* Theme choice */}
        {/* <div className="absolute z-50 top-2 right-2">
          <ModeToggle />
        </div> */}

        {/* Landing Page Grids */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

        {/* Moto */}
        <p className="text-center text-lg md:text-xl px-4">
          Simply built, Simply designed & Simply hosted
        </p>

        {/* Project Title */}
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative mb-6 md:mb-12">
          <h1 className="text-4xl md:text-7xl xl:text-[100px] font-bold text-center px-4 pb-7">
            WEBORA
          </h1>
        </div>

        {/* Image Section */}
        <div className="relative mt-2 md:mt-[-20px] flex justify-center items-center w-full max-w-screen-lg">
          <Image
            src={"/assets/preview.png"}
            alt="banner image"
            height={800}
            width={1200}
            className="w-full h-auto rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <div className="absolute bottom-0 top-[50%] left-0 right-0 bg-gradient-to-t dark:from-background z-10" />
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-40px]">
        <h2 className="text-4xl text-center">Choose what fits you right</h2>
        <p className="text-muted-foreground text-center">
          Our straightforward pricing plans are tailored to meet your needs. If{" "}
          {" you're "} not <br />
          ready to commit you can get started for free.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap mt-6">
          {pricingCards.map((card) => (
            //WIP : Wire up free product from stripe.
            <Card
              key={card.title}
              className={clsx("w-[300px] flex flex-col justify-between", {
                "border-2 border-primary": card.title === "Unlimited Saas",
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx("", {
                    "text-muted-foreground": card.title !== "Unlimited Saas",
                  })}
                >
                  {card.title}
                </CardTitle>
                <CardDescription>
                  {
                    pricingCards.find((c) => c.title === card.title)
                      ?.description
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">
                  <span>/m</span>
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {card.features.map((features) => (
                    <div key={features} className="flex gap-2 items-center">
                      <Check className="text-muted-foreground" />
                      <p>{features}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/agency?plan=${card.priceId}`}
                  className={clsx(
                    "w-full text-center bg-primary p-2 rounded-md",
                    {
                      "!bg-muted-foreground": card.title !== "Unlimited Saas",
                    }
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Component_83613467_e5ba_4c25_981b_f93c02a35ca3 />
      </section>
    </>
  );
}
