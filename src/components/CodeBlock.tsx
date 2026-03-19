import type { ReactNode, ComponentProps } from "react";

interface CodeBlockRootProps extends ComponentProps<"div"> {
  children: ReactNode;
}

function CodeBlockRoot({ children, className = "", ...rest }: CodeBlockRootProps) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

CodeBlockRoot.displayname = "CodeBlockRoot";

interface CodeBlockFrameProps extends ComponentProps<"div"> {
  children: ReactNode;
}

function CodeBlockFrame({ children, className = "", ...rest }: CodeBlockFrameProps) {
  return (
    <div className={`rounded-lg border border-gray-200 overflow-hidden ${className}`} {...rest}>
      {children}
    </div>
  );
}

CodeBlockFrame.displayname = "CodeBlockFrame";

interface CodeBlockTitleProps extends ComponentProps<"span"> {
  children: ReactNode;
}

function CodeBlockTitle({ children, className = "", ...rest }: CodeBlockTitleProps) {
  return (
    <span
      className={`px-4 py-2 bg-gray-50 border-b border-gray-200 text-xs font-mono text-gray-500 flex ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}

CodeBlockTitle.displayname = "CodeBlockTitle";

const variants = {
  dark: "bg-gray-950 text-gray-100",
  light: "bg-gray-50 rounded",
};

interface CodeBlockContentProps extends ComponentProps<"pre"> {
  children: ReactNode;
  variant?: keyof typeof variants;
}

function CodeBlockContent({
  children,
  className = "",
  variant = "dark",
  ...rest
}: CodeBlockContentProps) {
  return (
    <pre
      className={`p-4 font-mono text-mono overflow-x-auto whitespace-pre ${variants[variant]} ${className}`}
      {...rest}
    >
      <code>{children}</code>
    </pre>
  );
}

CodeBlockContent.displayname = "CodeBlockContent";

const CodeBlock = {
  Root: CodeBlockRoot,
  Frame: CodeBlockFrame,
  Title: CodeBlockTitle,
  Content: CodeBlockContent,
};

export { CodeBlock };
