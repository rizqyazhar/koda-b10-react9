import { useDispatch } from "react-redux";
import { removeData } from "../redux/slices/survey.slice";
import DataTable from "./DataTable";

export default function RowTable(props) {
  const reduxSurveyDispatch = useDispatch();

  const { id, nama, gender, smoking, umur, cigarettes } = props.data;

  return (
    <tr className='w-full border-b border-violet-100 text-center hover:bg-violet-100 md:text-base'>
      <DataTable>{nama}</DataTable>
      <DataTable>{gender}</DataTable>
      <DataTable>{umur}</DataTable>
      <DataTable>{smoking}</DataTable>
      {cigarettes.map((item, index) => {
        return <DataTable key={index}>{item ? "\u2713" : ""}</DataTable>;
      })}
      <DataTable>
        <button
          onClick={() => reduxSurveyDispatch(removeData(id))}
          type='button'
          className='w-full flex justify-center'>
          <img
            src='/del-icon.svg'
            alt='delete-icon'
            className='size-5 cursor-pointer'
          />
        </button>
      </DataTable>
    </tr>
  );
}
