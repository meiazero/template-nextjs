import { Credits } from "./credits";

export function Hero() {
  return (
    <div className="container flex flex-col justify-center space-y-8 text-center">
      <h1 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
        Welcome to Next.js 14 Template
      </h1>
      <p className="mx-auto max-w-[550px] text-zinc-200 md:text-xl dark:text-zinc-100">
        This template have installed: Next.js 14, Typescript, Tailwind CSS and
        shadcn-ui.
      </p>

      <Credits />
    </div>
  );
}
