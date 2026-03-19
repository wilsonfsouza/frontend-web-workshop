import { NavLink } from "react-router";
import { navItems, type NavLinkItem, type NavSubGroup, type NavGroup } from "@/data/navigation";
import { type NavModulesState } from "@/hooks/useNavModules";

interface GetLinkClassName {
  isActive: boolean;
}

const getLinkClassName = ({ isActive }: GetLinkClassName) =>
  `block px-3 py-1.5 rounded text-sm ${
    isActive
      ? "bg-indigo-100 text-indigo-800 font-medium"
      : "text-gray-600 hover:bg-gray-100"
  }`;

interface NavLinkEntryProps {
  item: NavLinkItem;
  isExactMatch?: boolean;
}

function NavLinkEntry({ item, isExactMatch }: NavLinkEntryProps) {
  return (
    <NavLink to={item.to} className={getLinkClassName} end={isExactMatch}>
      {item.label}
    </NavLink>
  );
}

NavLinkEntry.displayname = "NavLinkEntry";

interface NavSubGroupEntryProps {
  group: NavSubGroup;
  isFirst?: boolean;
}

function NavSubGroupEntry({ group, isFirst }: NavSubGroupEntryProps) {
  return (
    <div className={isFirst ? "mt-1" : "mt-3"}>
      <p className="px-3 mb-1 text-xs font-semibold text-gray-500 border-l-2 border-indigo-200 ml-2">
        {group.subheading}
      </p>
      <div className="flex flex-col gap-0.5">
        {group.items.map((link) => (
          <NavLinkEntry key={link.to} item={link} />
        ))}
      </div>
    </div>
  );
}

NavSubGroupEntry.displayname = "NavSubGroupEntry";

interface NavGroupEntryProps {
  group: NavGroup;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function NavGroupEntry({ group, index, isOpen, onToggle }: NavGroupEntryProps) {
  const headingId = `nav-heading-${index}`;

  return (
    <div
      className="border-b border-gray-100 pb-2 mt-2"
      role="group"
      aria-labelledby={headingId}
    >
      <button
        id={headingId}
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 hover:text-indigo-800 cursor-pointer rounded transition-colors"
      >
        <span className="text-left">{group.heading}</span>
        <svg
          className={`w-3.5 h-3.5 shrink-0 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="flex flex-col gap-0.5 mt-1">
          {group.items.map((child, childIndex) =>
            "to" in child ? (
              <NavLinkEntry key={child.to} item={child} />
            ) : (
              <NavSubGroupEntry key={`${index}-${childIndex}`} group={child} isFirst={childIndex === 0} />
            ),
          )}
        </div>
      )}
    </div>
  );
}

NavGroupEntry.displayname = "NavGroupEntry";

export function Navigation({ openModules, toggle }: NavModulesState) {
  return (
    <>
      {navItems.map((item, index) => {
        if ("to" in item) {
          return <NavLinkEntry key={item.to} item={item} isExactMatch />;
        }
        return (
          <NavGroupEntry
            key={index}
            group={item}
            index={index}
            isOpen={openModules.has(index)}
            onToggle={() => toggle(index)}
          />
        );
      })}
    </>
  );
}

Navigation.displayname = "Navigation";
