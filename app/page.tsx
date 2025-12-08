import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="light:bg-[#666] light:text-black h-screen transition-all duration-300 dark:bg-black dark:text-white">
      <h1 className="text-4xl font-bold">Hello</h1>
      <ThemeToggle />
    </div>
  );
}
