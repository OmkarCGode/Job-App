import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Applied from "./pages/Applied";
import Posted from "./pages/Posted";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Jobs/>,
  },
  {
    path:'applied',
    element:<Applied/>,
  },
  {
    path:'posted',
    element:<Posted/>,
  },
  {
    path:'profile',
    element:<Profile/>,
  }
  
]);

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
