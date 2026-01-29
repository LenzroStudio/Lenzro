import { Callout } from "./callout";

export const mdxComponents = {
  Callout,
  pre: (props: any) => (
    <pre className="relative rounded-lg bg-zinc-900 p-4 overflow-x-auto">
      {props.children}
    </pre>
  ),
  code: (props: any) => (
    <code className="text-emerald-400">{props.children}</code>
  ),
};
