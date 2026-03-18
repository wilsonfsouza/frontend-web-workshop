import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Variables } from "@/pages/m1/Variables";
import { TypeScript } from "@/pages/m1/TypeScript";
import { Functions } from "@/pages/m1/Functions";
import { Expressions } from "@/pages/m1/Expressions";
import { Scope } from "@/pages/m1/Scope";
import { Activity as M1Activity } from "@/pages/m1/Activity";
import { ReadingComponents } from "@/pages/m2/reading-components/ReadingComponents";
import { ComponentsActivity } from "@/pages/m2/components-activity/ComponentsActivity";
import { Components } from "@/pages/m2/Components";
import { UseState } from "@/pages/m2/UseState";
import { UseRef } from "@/pages/m2/UseRef";
import { UseEffect } from "@/pages/m2/UseEffect";
import { UseReducer } from "@/pages/m2/UseReducer";
import { UseMemo } from "@/pages/m2/UseMemo";
import { CustomHooks } from "@/pages/m2/CustomHooks";
import { BugHuntActivity } from "@/pages/m2/BugHuntActivity";
import { TailwindIntro } from "@/pages/m3/TailwindIntro";
import { UglyToPretty } from "@/pages/m3/ugly-to-pretty/UglyToPretty";
import { TailwindActivity } from "@/pages/m3/styling-activity/TailwindActivity";
import { TailwindCustomization } from "@/pages/m3/TailwindCustomization";
import { AnimationActivity } from "@/pages/m3/animation-activity/AnimationActivity";
import { ClientVsServer } from "@/pages/m4/ClientVsServer";
import { StateManagement } from "@/pages/m4/StateManagement";
import { StateActivity } from "@/pages/m4/state-activity/StateActivity";
import { NextjsIntro } from "@/pages/m5/NextjsIntro";
import { ServerClientComponents } from "@/pages/m5/ServerClientComponents";
import { ServerClientActivity } from "@/pages/m5/server-client-activity/ServerClientActivity";
import { NotFound } from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="m1/variables" element={<Variables />} />
          <Route path="m1/typescript" element={<TypeScript />} />
          <Route path="m1/functions" element={<Functions />} />
          <Route path="m1/expressions" element={<Expressions />} />
          <Route path="m1/scope" element={<Scope />} />
          <Route path="m1/activity" element={<M1Activity />} />
          <Route path="m2/reading" element={<ReadingComponents />} />
          <Route path="m2/ui-blueprint" element={<ComponentsActivity />} />
          <Route path="m2/components" element={<Components />} />
          <Route path="m2/use-state" element={<UseState />} />
          <Route path="m2/use-ref" element={<UseRef />} />
          <Route path="m2/use-effect" element={<UseEffect />} />
          <Route path="m2/use-reducer" element={<UseReducer />} />
          <Route path="m2/use-memo" element={<UseMemo />} />
          <Route path="m2/custom-hooks" element={<CustomHooks />} />
          <Route path="m2/activity" element={<BugHuntActivity />} />
          <Route path="m3/intro" element={<TailwindIntro />} />
          <Route path="m3/ugly-to-pretty" element={<UglyToPretty />} />
          <Route path="m3/activity" element={<TailwindActivity />} />
          <Route path="m3/customization" element={<TailwindCustomization />} />
          <Route path="m3/animation-activity" element={<AnimationActivity />} />
          <Route path="m4/client-vs-server" element={<ClientVsServer />} />
          <Route path="m4/state-management" element={<StateManagement />} />
          <Route path="m4/state-activity" element={<StateActivity />} />
          <Route path="m5/nextjs-intro" element={<NextjsIntro />} />
          <Route path="m5/server-client" element={<ServerClientComponents />} />
          <Route path="m5/server-client-activity" element={<ServerClientActivity />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
