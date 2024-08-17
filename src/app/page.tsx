import { ModeToggle } from "@/components/global/mode-toggle";

export default function Home() {
  return (
    <>
      <section className="w-full h-full relative flex items-center justify-center flex-col py-8">
        {/* Theme choice */}
        <div className="absolute z-50 top-2 right-2">
          <ModeToggle />
        </div>

        {/* Landing Page Grids */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Moto */}
        <p className="text-center relative z-10 capitalize text-sm">
          Simply built , Simply designed & Simply hosted
        </p>

        {/* Project Title */}
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-7xl font-bold text-center md:text-[159px] xl:text-[229px] projectTitle px-4 pb-7">
            PixelCraft
          </h1>
          <h1 className="text-7xl font-bold text-center md:text-[159px] xl:text-[229px] px-4 pb-7">
            PixelCraft
          </h1>
        </div>
      </section>
    </>
  );
}
