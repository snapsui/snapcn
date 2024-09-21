import { cn } from "@/lib/utils";

interface ComponentWrapperProps {
  className?: string;
  children: any;
}
const ComponentWrapper = ({ className, children }: ComponentWrapperProps) => {
  return (
    <div
      className={cn(
        "max-w-screen relative flex flex-col items-center justify-center rounded-md bg-background p-0 md:border md:p-16",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ComponentWrapper;
