"use client";

import { ReactNode } from "react";
import { useMDXComponents } from "@mdx-js/react";
import { components } from "./mdx-components";

type MDXClientProps = {
  children:
    | ReactNode
    | ((props: { components: Record<string, React.ComponentType<any>> }) => ReactNode);
};

export function MDXClient({ children }: MDXClientProps) {
  const allComponents = useMDXComponents(components);

  return (
    <div className="prose prose-invert max-w-3xl w-full">
      {typeof children === "function"
        ? children({ components: allComponents })
        : children}
    </div>
  );
}
