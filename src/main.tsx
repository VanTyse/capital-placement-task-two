import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpportunityOverview from "./Components/OpportunityOverview.tsx";
import ProgramOverview from "./Components/ProgramOverview.tsx";
import { TableDataProvider } from "./context/TableDataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TableDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<OpportunityOverview />} />
            <Route
              path="program-overview/:companyName"
              element={<ProgramOverview />}
            />
          </Route>
        </Routes>
      </Router>
    </TableDataProvider>
  </React.StrictMode>
);
