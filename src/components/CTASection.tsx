import React from 'react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  imageSrc,
  imageAlt,
  reverse = false
}) => {
  return (
    <section className="flex flex-col items-center gap-20 self-stretch bg-background px-16 py-28 max-md:px-8 max-md:py-20 max-sm:px-4 max-sm:py-[60px]">
      <div className="flex max-w-screen-xl mx-auto flex-col items-start gap-20 self-stretch">
        <div className={`flex items-center gap-20 self-stretch max-md:flex-col max-md:gap-10 ${reverse ? 'flex-row-reverse' : ''}`}>
          <div className="flex flex-col items-start gap-8 flex-[1_0_0]">
            <div className="flex flex-col items-start gap-6 self-stretch">
              <h2 className="self-stretch text-foreground text-[52px] font-medium leading-[62.4px] tracking-[-0.52px] max-md:text-4xl max-sm:text-[28px]">
                {title}
              </h2>
              <p className="self-stretch text-foreground text-lg font-normal leading-[27px] max-sm:text-base">
                {description}
              </p>
            </div>
            <div className="flex items-start gap-4">
              <button className="flex justify-center items-center gap-2 cursor-pointer rounded-xl border-none bg-jade hover:bg-jade-hover text-jade-foreground px-6 py-3 transition-colors">
                <span className="text-base font-medium leading-6">
                  {primaryButtonText}
                </span>
              </button>
              {secondaryButtonText && (
                <button className="flex justify-center items-center gap-2 cursor-pointer rounded-xl border-none bg-transparent hover:bg-muted px-4 py-2 transition-colors">
                  <span className="text-foreground text-base font-medium leading-6">
                    {secondaryButtonText}
                  </span>
                </button>
              )}
            </div>
          </div>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-[400px] flex-[1_0_0] aspect-[3/2] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
