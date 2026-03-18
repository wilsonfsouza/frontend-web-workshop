# Web Development Workshop

Interactive slide-show, examples, and hands-on activities for the Web Application Development training series.

## Overview

This project is the main presentation app for the training. Each page is a self-contained slide you can walk through during the session or explore independently. Activities have interactive elements (quizzes, reveal-to-check exercises, TODO starters) for participants to engage with.

### Modules

- **Module 1 — What This Code Actually Means?**
  Variables, functions, expressions, scope, TypeScript basics, and a Team Dashboard Helper activity.

- **Module 2 — Reading and Modifying React Apps**
  UI Blueprint activity, component anatomy, common hooks (useState, useRef, useEffect, useReducer, useMemo/useCallback), custom hooks, and a Bug Hunt activity.

- **Module 3 — Make It Pretty with Tailwind CSS**
  Utility-first CSS, the naming pattern, layout with flexbox, responsive prefixes, dark mode, and a Style It Yourself activity.

- **Module 4 — Where does this state belong?**
  Evolution of the web (traditional, SPA, SSR), state management strategies (local, global, HTTP, URL, server), and a State Management Decisions activity.

- **Module 5 — Reading and Modifying Next.js Apps**
  Introduction to Next.js (file-based routing, special files, dynamic routes), server vs client components (rules, isolation, composition), and an interactive Server or Client? activity.

## Prerequisites

- Node.js 18+ (20+ recommended)
- npm 9+

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. Use the sidebar to navigate between modules.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format all source files with Prettier |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
src/
  components/         Shared UI (Layout, ExampleCard, CodeBlock)
  data/               Mock data and fake API helpers
  pages/
    Home.tsx           Landing page with module overview
    m1/                Module 1: JavaScript & TypeScript fundamentals
      Variables.tsx        Variables, destructuring, spread
      Functions.tsx        Arrow functions, .map/.filter/.find
      Expressions.tsx      Ternary, ?., ??, && short-circuit
      Scope.tsx            Block scope, closures
      TypeScript.tsx       Types & interfaces
      Activity.tsx         Team Dashboard Helper (TODO starters)
    m2/                Module 2: React components & hooks
      components-activity/   UI Blueprint (interactive component identification)
        ComponentsActivity.tsx  Main activity page
        BoardMockup.tsx         Simplified Taskei board mockup
        data.ts                 Component zones and level styles
      reading-components/      Reading a component top to bottom
        ReadingComponents.tsx   Main walkthrough page
        TaskList.tsx            Interactive task list demo being dissected
        data.ts                 Task type, initial data, status mappings
      Components.tsx          Props, children, lists, organizing (React vs Next.js)
      UseState.tsx            Counter, controlled input, derived state
      UseRef.tsx              DOM access, mutable values
      UseEffect.tsx           Data fetching with cleanup, event listeners
      UseReducer.tsx          Wizard/stepper with coupled state
      UseMemo.tsx             useMemo and useCallback comparison
      CustomHooks.tsx         useLocalStorage and useDebounce
      BugHuntActivity.tsx     Broken component to debug
    m3/                Module 3: Tailwind CSS
      TailwindIntro.tsx      Utility classes, naming, spacing, layout
      ugly-to-pretty/        Before/after styling walkthrough
        UglyToPretty.tsx       Main step-by-step page
        ProfileCard.tsx        Live preview card component
        generateCode.ts        JSX code generation for each step
        data.ts                Profile data and step definitions
      TailwindActivity.tsx   Style It Yourself exercise
    m4/                Module 4: Web architecture & state management
      ClientVsServer.tsx     Traditional vs SPA vs SSR + hydration
      StateManagement.tsx    5 state categories with code examples
      state-activity/        State Management Decisions exercise
        StateActivity.tsx      Main activity page
        ScenarioCard.tsx       Scenario card with reveal answer
        data.ts                Scenarios, options, and color mappings
    m5/                Module 5: Next.js
      NextjsIntro.tsx        File-based routing, special files, dynamic routes
      ServerClientComponents.tsx  Rules, isolation, composition patterns
      server-client-activity/    Server or Client? quiz + isolation exercise
        ServerClientActivity.tsx    Main activity page
        QuizCard.tsx                Quiz card for classify-the-component exercise
        IsolationCard.tsx           Card for isolate-the-client exercise
        data.ts                     Quiz items and header parts data
```

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- React Router 7
- ESLint + Prettier
