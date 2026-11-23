import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import SurveyFormPage from "./pages/SurveyFormPage";
import TablePage from "./pages/TablePage";
import { Provider as SurveyProvider } from "react-redux";
import surveyStore from "./redux/store.js";

const router = createBrowserRouter([
  { path: "/", element: <SurveyFormPage /> },
  { path: "/table", element: <TablePage /> },
]);

export default function App() {
  return (
    <SurveyProvider store={surveyStore}>
      <RouterProvider router={router} />
    </SurveyProvider>
  );
}
