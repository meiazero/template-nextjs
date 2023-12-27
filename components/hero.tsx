import { Credits } from "./credits";

export function Hero() {
  return (
    <section className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
      <div className="container space-y-8 flex flex-col justify-center text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Welcome to Next.js 13 Template
        </h1>
        <p className="max-w-[550px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
          This template have installed: Next.js 13, Typescript, Tailwind CSS and
          shadcn-ui.
        </p>

        <Credits />
      </div>
    </section>
  );
}
