import React, { Suspense, lazy } from "react";
import Timeout from './Timeout';
const OtherComponent = lazy(() => import('./OtherComponent'));
const AnotherComponent = lazy(() => import('./AnotherComponent'));

export default ({ ms=0 }) => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
    </Suspense>
    <Timeout ms={ms} fallback={<p>wait for it...</p>}>
      <Suspense fallback={<div>Loading...</div>}>
          <AnotherComponent />
      </Suspense>
    </Timeout>
  </>
);
