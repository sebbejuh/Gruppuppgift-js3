import "./App.css";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
