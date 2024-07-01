import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------

type SpinnerProps = {
  className?: string;
  text?: string;
}

const Spinner = ({ className, text }: SpinnerProps) => {
  return (
    <div className="text-center">
      <div 
        className={cn(
          'border-slate-200 h-10 w-10 animate-spin rounded-full border-[5px] border-t-slate-300 m-auto',
          className
        )}
      />
      <div className="text-xs text-slate-400 mt-1">{text}</div>
    </div> 
  )
}

export default Spinner;