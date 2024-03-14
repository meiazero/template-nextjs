import Link from "next/link";
import { Icons } from "../ui/icons";

export function Credits() {
  return (
    <div className="flex justify-center text-zinc-200 dark:text-zinc-100">
      <p>Created by:</p> &nbsp;
      <Link
        href="https://github.com/meiazero"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <Icons.gitHub className="mx-1 h-6 w-6" />
      </Link>
    </div>
  );
}
