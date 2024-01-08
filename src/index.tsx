import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppProvider from "./components/Provider";
import Root from "./routes/root";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
]);

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
    <AppProvider>
        <RouterProvider router={router} />
    </AppProvider>
);
