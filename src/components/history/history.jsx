import HistoryTable from "../shared/historytable";

const History = ({ historyData }) => {
	const tableHeaders = ["No.", "Fx", "Override", "USD to EUR", "EUR", "USD"];
	const trimmedData = historyData.slice(0, 5);
	return (
		<div className='w-5/6 mx-auto'>
			<HistoryTable tableHeaders={tableHeaders} tableData={trimmedData} />
		</div>
	);
};

export default History;
