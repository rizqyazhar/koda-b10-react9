import { useSelector } from "react-redux";
import RowTable from "../components/RowTable";
import Layout from "../layouts/Layout";
import TableLayout from "../layouts/TableLayout";

export default function TablePage() {
  const reduxSurveyState = useSelector((state) => state.surveyResult);

  return (
    <Layout>
      <TableLayout>
        {reduxSurveyState.map((item, index) => {
          return <RowTable key={`row-${index + 1}`} data={item} />;
        })}
      </TableLayout>
    </Layout>
  );
}
