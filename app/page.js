import Image from "next/image";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-start py-12 px-6 bg-white dark:bg-black sm:items-start">
        <div className="mb-6 w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
            <h1 className="text-2xl font-semibold">Products</h1>
          </div>
        </div>

        {/* Client component that handles fetching, state and interactivity */}
        <ProductGrid />
      </main>
    </div>
  );
}
import Image from "next/image";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-start py-12 px-6 bg-white dark:bg-black sm:items-start">
        <div className="mb-6 w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
            <h1 className="text-2xl font-semibold">Products</h1>
          </div>
        </div>

        {/* Client component that handles fetching, state and interactivity */}
        <ProductGrid />
      </main>
    </div>
  );
}
