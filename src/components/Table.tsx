import { type ComponentProps } from "react";

type Size = "sm" | "xs";

interface RootProps extends Omit<ComponentProps<"table">, "size"> {
  size?: Size;
}

function TableRoot({ size = "sm", className = "", children, ...props }: RootProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full text-${size} text-left ${className}`} {...props}>
        {children}
      </table>
    </div>
  );
}

TableRoot.displayname = "TableRoot";

function TableHead({ children, ...props }: ComponentProps<"thead">) {
  return <thead {...props}>{children}</thead>;
}

TableHead.displayname = "TableHead";

function TableBody({ className = "", children, ...props }: ComponentProps<"tbody">) {
  return (
    <tbody className={`text-gray-600 ${className}`} {...props}>
      {children}
    </tbody>
  );
}

TableBody.displayname = "TableBody";

function TableHeaderRow({ children, ...props }: ComponentProps<"tr">) {
  return (
    <tr className="border-b border-gray-200" {...props}>
      {children}
    </tr>
  );
}

TableHeaderRow.displayname = "TableHeaderRow";

function TableHeader({ className = "", children, ...props }: ComponentProps<"th">) {
  return (
    <th
      className={`py-2 pr-3 font-medium text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </th>
  );
}

TableHeader.displayname = "TableHeader";

function TableRow({ className = "", children, ...props }: ComponentProps<"tr">) {
  return (
    <tr
      className={`border-b border-gray-100 last:border-0 ${className}`}
      {...props}
    >
      {children}
    </tr>
  );
}

TableRow.displayname = "TableRow";

function TableCell({ className = "", children, ...props }: ComponentProps<"td">) {
  return (
    <td className={`py-2 pr-3 ${className}`} {...props}>
      {children}
    </td>
  );
}

TableCell.displayname = "TableCell";

const Table = {
  Root: TableRoot,
  Head: TableHead,
  Body: TableBody,
  HeaderRow: TableHeaderRow,
  Header: TableHeader,
  Row: TableRow,
  Cell: TableCell,
};

export { Table };
