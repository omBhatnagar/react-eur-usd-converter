const HistoryTable = ({ tableHeaders, tableData }) => {
	return (
		<div class='relative overflow-x-auto shadow-md sm:rounded-lg my-16'>
			<table class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
				<caption class='p-5 text-3xl font-semibold text-left text-white bg-gray-800'>
					History
					<p class='mt-1 text-sm font-normal text-gray-500 dark:text-gray-400'>
						Browse the latest five conversions made with this converter,
						updating in real time.
					</p>
				</caption>
				<thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<tr>
						{tableHeaders?.map((header) => (
							<th scope='col' class='px-6 py-3'>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{tableData &&
						tableData.map((item, index) => (
							<tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
								<td class='px-6 py-4'>#{index + 1}</td>
								<th
									scope='row'
									class='px-6 py-4 font-medium whitespace-nowrap text-white'
								>
									{item.fx}
								</th>
								<td class='px-6 py-4'>{item.overrideFx ? "True" : "False"}</td>
								<td class='px-6 py-4'>
									{item.currencyToggle ? "True" : "False"}
								</td>
								<td class='px-6 py-4 text-white'>{item.amount}</td>
								<td class='px-6 py-4 text-white'>{item.result}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default HistoryTable;
