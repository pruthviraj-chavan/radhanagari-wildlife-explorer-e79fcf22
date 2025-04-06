
import { cn } from "@/lib/utils";

interface InfoSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  gradient?: string;
  textColor?: string;
}

const InfoSection = ({
  title,
  subtitle,
  children,
  className,
  gradient,
  textColor = "text-gray-800"
}: InfoSectionProps) => {
  return (
    <section className={cn("py-16", className, gradient)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", textColor)}>
            {title}
          </h2>
          {subtitle && (
            <p className={cn("text-lg md:max-w-2xl mx-auto", textColor, "opacity-80")}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default InfoSection;
