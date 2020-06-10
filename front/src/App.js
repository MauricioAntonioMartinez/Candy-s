import React, { Suspense } from "react";

import LayOut from "./HOC/LayOut";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Dulces = React.lazy(() => import("./Containers/Dulces/Dulces"));
const AdminDulces = React.lazy(() => import("./Containers/DulcesAdmin/Dulces"));
const AgregarDulce = React.lazy(() =>
  import("./Containers/AgregarDulce/AgregarDulce")
);

function App() {
  return (
    <BrowserRouter>
      <LayOut>
        <Suspense fallback={<div>Cargando....</div>}>
          <Switch>
            <Route path="/dulces" component={Dulces} />
            <Route path="/admin/dulces" component={AdminDulces} />
            <Route path="/agregar-dulce" component={AgregarDulce} />
            <Redirect to="/dulces" />
          </Switch>
        </Suspense>
      </LayOut>
    </BrowserRouter>
  );
}

export default App;