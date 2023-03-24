const Button = ({ title, onClick }) => {
	return (
		<div className='w-5/6 flex justify-center'>
			<button
				onClick={onClick}
				type='button'
				className='text-white bg-gray-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 hover:bg-gray-700 focus:ring-gray-700 border-gray-800'
			>
				{title}
			</button>
		</div>
	);
};

export default Button;
