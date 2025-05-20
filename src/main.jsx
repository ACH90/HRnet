// main.jsx
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
