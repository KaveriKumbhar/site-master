export default function Home() {
  return (
    <main className="w-full h-full relative flex items-center justify-center flex-col py-8">
      {/* Landing Page Grids */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Moto */}
      <p className="text-center capitalize text-sm md:text-base">
        Simply built , Simply designed & Simply hosted
      </p>

      {/* Project Title */}
      <div className="bg-gradient-to-r from-primary  to-secondary-foreground text-transparent bg-clip-text relative">
        <h1 className="text-7xl font-bold text-center md:text-[159px] xl:text-[229px] projectTitle px-4 pb-7">
          PixelCraft
        </h1>
        <h1 className="text-7xl font-bold text-center md:text-[159px] xl:text-[229px] px-4 pb-7">
          PixelCraft
        </h1>
      </div>
    </main>
  );
}
