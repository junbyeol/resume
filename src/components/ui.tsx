interface _BaseProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: _BaseProps) => {
  return (
    <div
      className={`w-full h-full bg-background flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};

export const Section = ({ children, className }: _BaseProps) => {
  return (
    <section className={`w-full p-6 flex justify-center ${className}`}>
      {children}
    </section>
  );
};

export const Card = ({ children, className }: _BaseProps) => {
  return (
    <div className={`w-full bg-bg-dark rounded-3xl p-4 ${className}`}>
      {children}
    </div>
  );
};

interface _SpacingProps {
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 16;
  align?: "start" | "center" | "end" | "stretch";
}

const gapStyles = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  16: "gap-16",
};

const alignStyles = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

export const Stack = ({
  children,
  className,
  gap = 2,
  align = "start",
}: _BaseProps & _SpacingProps) => {
  return (
    <div
      className={`flex flex-col ${gapStyles[gap]} ${alignStyles[align]} ${className}`}
    >
      {children}
    </div>
  );
};

export const Inline = ({
  children,
  className,
  gap = 2,
  align = "center",
}: _BaseProps & _SpacingProps) => {
  return (
    <div
      className={`flex flex-row ${gapStyles[gap]} ${alignStyles[align]} ${className}`}
    >
      {children}
    </div>
  );
};

type PolymorphicProps<E extends React.ElementType> = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<E> & {
    as?: E;
  }
>;

//https://velog.io/@jh5717/as-prop-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0
interface _TextProps {
  children: React.ReactNode;
  className?: string;
  variant:
    | "main-title"
    | "main-subtitle"
    | "main-body"
    | "section-header"
    | "section-title"
    | "section-meta-text"
    | "section-title-secondary"
    | "section-body";
}

type TextProps = PolymorphicProps<"span" | "p" | "li"> & _TextProps;

const variantStyles = {
  "main-title": "text-main-title text-text",
  "main-subtitle": "text-main-subtitle text-accent",
  "main-body": "text-main-body text-text",
  "section-header": "text-section-header text-text",
  "section-title": "text-section-title text-text",
  "section-meta-text": "text-section-meta-text text-text-muted",
  "section-title-secondary": "text-section-title-secondary text-accent",
  "section-body": "text-section-body text-text",
};

export const Text = ({
  as = "p",
  children,
  variant,
  className = "",
  ...props
}: TextProps) => {
  const Component = as;
  const spreadProps = props as React.HTMLAttributes<HTMLElement>;

  const lines =
    typeof children === "string" ? children.split("\n") : [children];

  return lines.length > 1 ? (
    <div className={`grid auto-rows-auto gap-1 ${className}`}>
      {lines.map((line, index) => (
        <Component key={index} className={`${variantStyles[variant]}`} {...spreadProps}>{line}</Component>
      ))}
    </div>
  ) : (
    <Component className={`${variantStyles[variant]} ${className}`} {...spreadProps}>
      {children}
    </Component>
  );
};

interface ActionProps extends React.HTMLAttributes<HTMLElement> {
  to: string;
  children: React.ReactNode;
}

export const Link = ({ to, children, className }: ActionProps) => {
  return (
    <a
      href={to}
      className={`cursor-pointer transition-all hover:scale-95 ${className}`}
    >
      {children}
    </a>
  );
};
