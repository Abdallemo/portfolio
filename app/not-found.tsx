import {
  AlertCircle,
  ArrowLeft,
  Home,
  Terminal as TerminalIcon,
} from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 h-[70vh] flex flex-col justify-center items-center font-mono">
      <div className="w-full max-w-md space-y-8">
        {/* Error Header */}
        <div className="border border-border p-6 bg-card/50 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-destructive/50"></div>

          <div className="flex items-center justify-between border-b border-border pb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-destructive flex items-center gap-2">
              <AlertCircle size={14} /> Critical Error
            </span>
            <span className="text-[10px] text-dim uppercase tracking-widest">
              Code: 404
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter text-foreground">
              SEGMENT_NOT_FOUND
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The requested memory address or resource could not be located in
              the current workspace. The link may be broken or the page has been
              de-indexed.
            </p>
          </div>

          <div className="pt-4 border-t border-border space-y-2">
            <div className="flex justify-between text-[10px]">
              <span className="text-dim">REQUEST_STATUS</span>
              <span className="text-destructive font-bold uppercase">
                Terminated
              </span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-dim">TRACE_ID</span>
              <span className="text-dim font-bold">
                {Math.random().toString(16).substring(2, 10).toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 p-4 border border-border hover:border-accent hover:bg-card transition-all group"
          >
            <Home size={16} className="text-dim group-hover:text-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
              Return Home
            </span>
          </Link>
          <Link
            href="/projects"
            className="flex items-center justify-center gap-3 p-4 border border-border hover:border-accent hover:bg-card transition-all group"
          >
            <TerminalIcon
              size={16}
              className="text-dim group-hover:text-accent"
            />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
              Workbench
            </span>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="text-[10px] text-dim hover:text-muted-foreground transition-colors uppercase tracking-[0.3em] flex items-center justify-center gap-2"
          >
            <ArrowLeft size={10} /> Abort and restart session
          </Link>
        </div>
      </div>
    </main>
  );
}
