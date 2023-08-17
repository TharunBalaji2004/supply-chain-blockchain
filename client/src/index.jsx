import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AssignRoles from "./Components/AssignRoles/AssignRoles";
import AddMed from "./Components/AddMed/AddMed";
import Supply from "./Components/Supply/Supply";
import Track from "./Components/Track/Track";
import HomePage from "./Pages/HomePage";

{/* <Routes>
  <Route path="/" exact element={<Home />} />
  <Route path="/roles" element={<AssignRoles />} />
  <Route path="/addmed" element={<AddMed />} />
  <Route path="/supply" element={<Supply />} />
  <Route path="/track" element={<Track />} />
</Routes> */}

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/roles",
        element: <AssignRoles />
      },
      {
        path: "/addmed",
        element: <AddMed />
      },
      {
        path: "/supply",
        element: <Supply />
      },
      {
        path: "/track",
        element: <Track />
      }
    ]
  }])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
