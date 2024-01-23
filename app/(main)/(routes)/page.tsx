import { ModeToggle } from "@/components/mode-toggle/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="bg-zinc-800 h-screen text-3xl font-extrabold">
      <UserButton afterSignOutUrl="/"/>
      <ModeToggle />
    </div>
  );
}
