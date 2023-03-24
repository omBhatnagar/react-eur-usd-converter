const TextInput = ({ title, value, onChange, disabled, readOnly }) => {
	return (
		<div className='w-5/6'>
			<label
				htmlFor={title}
				className='block mb-2 text-sm font-medium text-white w-5/6 '
			>
				{title}
			</label>
			<input
				disabled={disabled}
				type='text'
				id={title}
				value={value}
				onChange={onChange}
				className='border text-sm rounded-lg focus:ring-blue-500  block w-5/6  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-70'
				readOnly={readOnly}
				required
			/>
		</div>
	);
};

export default TextInput;
