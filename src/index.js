import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UpvoteListsProvider } from "./context/UpvoteListsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UpvoteListsProvider>
    <App />
  </UpvoteListsProvider>
);

reportWebVitals();
