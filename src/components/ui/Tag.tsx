import Link from "next/link";

interface TagProps {
  tag: string;
  className?: string;
}

export function Tag({ tag, className = "" }: TagProps) {
  return (
    <Link
      href={`/tags/${tag.toLowerCase()}`}
      className={`text-[10px] uppercase border border-[#1a1a1a] px-2 py-0.5 text-[#555] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all font-mono ${className}`}
    >
      {tag}
    </Link>
  );
}
