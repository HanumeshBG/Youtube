import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const App = () => {
    const appRouter = createBrowserRouter([{
        path: "/",
        element: <Body />,
        errorElement: <div>Page Not Found</div>,
        children: [
            {
                path: "/",
                element: <MainContainer />
            },
            {
                path: "watch",
                element: <WatchPage />,
            }
        ]
    }    
    ])

    return (
        <Provider store={store}>
            <div>
                <Header />
                <RouterProvider router={appRouter}/>
            </div>
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);