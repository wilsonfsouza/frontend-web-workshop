import { useState, useMemo } from "react";
import { useLocation } from "react-router";
import { navItems, type NavGroup } from "@/data/navigation";

function getGroupPaths(group: NavGroup): string[] {
  return group.items.flatMap((child) =>
    "to" in child ? [child.to] : child.items.map((link) => link.to),
  );
}

export function useNavModules() {
  const location = useLocation();

  const groups = navItems.filter((item): item is NavGroup => !("to" in item));
  const activeGroupIndex = groups.findIndex((group) =>
    getGroupPaths(group).some((path) => location.pathname.startsWith(path)),
  );

  // Tracks modules the user has manually toggled open/closed.
  // Key = group index, value = true (forced open) or false (forced closed).
  const [manualToggles, setManualToggles] = useState<Map<number, boolean>>(() => new Map());

  // Derive the effective set: the active group is always open unless the user
  // explicitly collapsed it, and any manually-opened groups stay open.
  const openModules = useMemo(() => {
    const result = new Set<number>();

    // Auto-expand the active module
    if (activeGroupIndex >= 0 && manualToggles.get(activeGroupIndex) !== false) {
      result.add(activeGroupIndex);
    }

    // Include any modules the user manually opened
    manualToggles.forEach((isOpen, idx) => {
      if (isOpen) result.add(idx);
    });

    return result;
  }, [activeGroupIndex, manualToggles]);

  const toggle = (idx: number) => {
    setManualToggles((prev) => {
      const next = new Map(prev);
      const currentlyOpen = openModules.has(idx);
      next.set(idx, !currentlyOpen);
      return next;
    });
  };

  return { openModules, toggle };
}

export type NavModulesState = ReturnType<typeof useNavModules>;
