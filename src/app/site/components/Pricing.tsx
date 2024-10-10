// components/Pricing.tsx
import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react'; // assuming you are using Lucide icons
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { pricingCards } from "@/lib/constants";
// Example data for pricing cards

// Pricing Component
const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="flex flex-col items-center gap-6 md:mt-20 mt-[-40px] px-4 py-10 rounded-lg"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 dark:text-blue-400 tracking-wide animate-fade-in">
            Choose what fits you right
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-3xl leading-relaxed animate-fade-in">
            Our straightforward pricing plans are tailored to meet your needs. If you’re not ready to commit, you can get started for free.
          </p>

          {/* Cards */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {pricingCards.map((card) => (
              <Card
                key={card.title}
                className="w-full flex flex-col justify-between p-6 transition-transform transform hover:-translate-y-4 border-2 border-gray-300 bg-white hover:border-blue-500 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:border-blue-400"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-gray-700 dark:text-gray-300">
                    {card.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                    {card.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">/m</span>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4 mt-4">
                  <div>
                    {card.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex gap-2 items-center text-gray-800 dark:text-gray-200"
                      >
                        <Check className="text-primary dark:text-primary" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/agency?plan=${card.priceId}`}
                    className="w-full text-center bg-primary p-3 rounded-md text-white transition-colors hover:bg-secondary-foreground hover:text-white dark:hover:bg-secondary-foreground dark:hover:text-black"
                  >
                    Get Started
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div> 
    </section>
  );
};

export default Pricing;
