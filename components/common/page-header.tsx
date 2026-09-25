interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <>
      <div className="mt-6 flex flex-col items-start gap-3 sm:mt-8 sm:gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block max-w-full font-heading text-3xl tracking-tight capitalize sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
      </div>
      <hr className="my-6" />
    </>
  );
}
