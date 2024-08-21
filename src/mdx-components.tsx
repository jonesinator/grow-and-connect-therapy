import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="py-4">{children}</h1>,
    h2: ({ children }) => <h2 className="py-6">{children}</h2>,
    h3: ({ children }) => <h3 className="py-4">{children}</h3>,
    ul: ({ children }) => <ul className="pl-6 py-1.5 list-disc">{children}</ul>,
    p: ({ children }) => <p className="py-1.5">{children}</p>,
    ...components,
  };
}
