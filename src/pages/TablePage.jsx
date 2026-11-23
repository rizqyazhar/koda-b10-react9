import RowTable from "../components/RowTable";
import Layout from "../layouts/Layout";
import TableLayout from "../layouts/TableLayout";

export default function TablePage() {
  const getDataFromLocalStorage =
    JSON.parse(window.localStorage.getItem("survey")) || [];

  return (
    <Layout>
      <TableLayout>
        {getDataFromLocalStorage.map((item, index) => {
          return <RowTable key={`row-${index + 1}`} data={item} />;
        })}
      </TableLayout>
    </Layout>
  );
}
