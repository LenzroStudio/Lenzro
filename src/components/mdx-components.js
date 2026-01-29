// Custom MDX components for shadcn/Next.js style docs

import { mdxComponents } from "./mdx/mdx-components";
import { cn } from "@/lib/utils";

export const components = {
  h1: (props) => (
    <h1
      className={cn(
        "scroll-m-20 text-2xl font-bold tracking-tight lg:text-5xl mt-8 mb-4",
        props.className,
      )}
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-8 mb-4",
        props.className,
      )}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight mt-6 mb-2",
        props.className,
      )}
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight mt-4 mb-2",
        props.className,
      )}
      {...props}
    />
  ),
  p: (props) => (
    <p className={cn("leading-7 mt-2 mb-4", props.className)} {...props} />
  ),
  ul: (props) => (
    <ul className={cn("my-6 ml-6 list-disc", props.className)} {...props} />
  ),
  ol: (props) => (
    <ol className={cn("my-6 ml-6 list-decimal", props.className)} {...props} />
  ),
  li: (props) => <li className={cn("mt-2", props.className)} {...props} />,
  blockquote: (props) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic text-muted-foreground",
        props.className,
      )}
      {...props}
    />
  ),
  code: (props) => (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3em] py-[0.2em] font-mono text-sm",
        props.className,
      )}
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg bg-black py-4 px-6 font-mono text-sm text-white",
        props.className,
      )}
      {...props}
    />
  ),
  strong: (props) => (
    <strong className={cn("font-semibold", props.className)} {...props} />
  ),
  em: (props) => <em className={cn("italic", props.className)} {...props} />,
  hr: (props) => (
    <hr className={cn("my-8 border-gray-700", props.className)} {...props} />
  ),
  a: (props) => (
    <a
      className={cn(
        "font-medium text-primary underline underline-offset-4 hover:text-primary/80",
        props.className,
      )}
      {...props}
    />
  ),
  ...mdxComponents,
};
