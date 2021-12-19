import React, {Suspense} from 'react';
import Loader from "./component/loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
     
    </Suspense>
  );
}

export default App;
