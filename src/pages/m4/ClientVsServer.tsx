import { ExampleCard } from "@/components/ExampleCard";
import { Table } from "@/components/Table";

export function ClientVsServer() {
  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          The Evolution of the Web
        </h2>
        <p className="text-gray-500 mt-1">
          How we went from full-page reloads to single-page apps to server-rendered React.
        </p>
      </div>

      <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-800 space-y-2">
        <p>
          Before modern tools like React, websites worked like traditional apps (think old PHP or
          basic HTML sites). Every time you clicked a link, the browser sent a request, the server
          built a new page, and the entire screen flickered white while it reloaded.
        </p>
        <p>
          With React, we don&apos;t need to refresh the whole page to show new data. We only update
          the parts that changed.
        </p>
      </div>

      <ExampleCard
        title="Single Page Application (SPA)"
        description="Download once, run everywhere."
      >
        <div className="space-y-3 text-sm text-gray-600">
          <p>
            You load the HTML file exactly once. After that, JavaScript (React) takes over and swaps
            content in and out dynamically. Libraries like react-router change &quot;pages&quot;
            without actually leaving the single HTML file.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs font-medium text-gray-900 mb-1">Hosting</p>
              <p className="text-xs">
                Just static files (HTML, JS, CSS). Host them cheaply on services like AWS S3,
                Netlify, or similar.
              </p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs font-medium text-gray-900 mb-1">Best for</p>
              <p className="text-xs">
                Internal dashboards, social media feeds, or apps where SEO doesn&apos;t matter.
              </p>
            </div>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Server-Side Rendering (SSR) &amp; Next.js"
        description="The server prepares the page first and sends it ready-to-read."
      >
        <div className="space-y-3 text-sm text-gray-600">
          <p>
            Instead of making the browser do all the work, the server assembles the page and sends
            finished HTML. Search engines and AI tools can read the content easily, which is vital
            for SEO.
          </p>
          <p>
            You can&apos;t just put this on a basic storage site like S3. You need a Node.js server
            running to do that pre-assembling work.
          </p>
          <div className="p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800">
            💡 Think of this as an e-reader. The first page is already there when you turn it on
            (server-side), but after that the pages flip instantly and smoothly without you ever
            having to put the device down (client-side).
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="Old SSR vs Next.js"
        description="From clunky full reloads to the hydrated approach."
      >
        <div className="space-y-4 text-sm text-gray-600">
          <div>
            <p className="text-xs font-semibold text-gray-900 mb-1">
              The old way (traditional SSR)
            </p>
            <p>
              Every click sent a request to the server. The server built a brand new HTML page from
              scratch. The browser wiped the screen (white flash) and loaded the new page. Even if
              only one small number changed, the entire header, footer, and sidebar had to be
              re-downloaded and re-rendered.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-900 mb-1">
              The Next.js way (hydration)
            </p>
            <ul className="space-y-2 list-none">
              <li className="flex gap-2">
                <span className="shrink-0 text-indigo-500 font-bold">1.</span>
                <span>
                  <span className="font-medium text-gray-900">First load:</span>{" "}
                  The server sends a fully built HTML page so the user sees content immediately
                  (great for SEO).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-indigo-500 font-bold">2.</span>
                <span>
                  <span className="font-medium text-gray-900">Hydration:</span>{" "}
                  Once that HTML hits the browser, React &quot;wakes up&quot; and takes over the
                  page, turning it into a SPA.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-indigo-500 font-bold">3.</span>
                <span>
                  <span className="font-medium text-gray-900">
                    Subsequent clicks:
                  </span>{" "}
                  No full reload. React fetches the new data and updates only the piece of the
                  screen that changed.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </ExampleCard>

      <ExampleCard title="At a Glance" description="How the three approaches compare.">
        <Table.Root>
          <Table.Head>
            <Table.HeaderRow>
              <Table.Header />
              <Table.Header>Traditional</Table.Header>
              <Table.Header>SPA</Table.Header>
              <Table.Header>Next.js (SSR + Hydration)</Table.Header>
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell className="font-medium text-gray-900">
                First load
              </Table.Cell>
              <Table.Cell>Server builds HTML</Table.Cell>
              <Table.Cell>Blank page until JS loads</Table.Cell>
              <Table.Cell>Server builds HTML (fast)</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-medium text-gray-900">
                Navigation
              </Table.Cell>
              <Table.Cell>Full page reload</Table.Cell>
              <Table.Cell>Instant (JS swaps content)</Table.Cell>
              <Table.Cell>Instant after hydration</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-medium text-gray-900">SEO</Table.Cell>
              <Table.Cell>Good</Table.Cell>
              <Table.Cell>Poor</Table.Cell>
              <Table.Cell>Good</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="font-medium text-gray-900">
                Hosting
              </Table.Cell>
              <Table.Cell>Server required</Table.Cell>
              <Table.Cell>Static files (S3, CDN)</Table.Cell>
              <Table.Cell>Node.js server required</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </ExampleCard>
    </div>
  );
}
