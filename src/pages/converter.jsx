import { useCallback, useEffect, useState } from "react";

import TextInput from "../components/textinput";
import Button from "../components/button";
import Toggle from "../components/toggle";

import percentageDifference from "../utils/precentageDifference";

const Converter = () => {
	const [currencyToggle, setCurrencyToggle] = useState(false);
	const [overrideFx, setOverrideFx] = useState(false);
	const [amount, setAmount] = useState(0);
	const [result, setResult] = useState(0);
	const [customFx, setCustomFx] = useState(0);
	const [fx, setFx] = useState(1.1);

	// State change handlers
	const handleAmountChange = (e) => setAmount(e.target.value);
	const handleCurrencyToggleChange = () =>
		setCurrencyToggle((prevToggle) => !prevToggle);
	const handleOverrideFx = () => setOverrideFx((prevToggle) => !prevToggle);
	const handleCustomFxChange = (e) => setCustomFx(e.target.value);

	// Function to convert currency
	const convertCurrency = useCallback(() => {
		// Check if fx is overridden and if percentage difference is < 2
		let _fx =
			overrideFx && percentageDifference(fx, customFx) < 2 ? customFx : fx;

		// Convert USD to EUR if toggled
		if (!currencyToggle) return setResult(amount * _fx);
		setResult(amount / _fx);
	}, [amount, fx, currencyToggle, customFx, overrideFx]);

	// Update fx every 3 seconds
	useEffect(() => {
		setTimeout(() => {
			setFx((prevFx) => prevFx + (Math.random() * 0.11 - 0.05));
		}, 3000);
	}, [fx]);

	// Update result in real time
	useEffect(() => convertCurrency(), [convertCurrency, fx]);

	return (
		<div className='w-1/2 mx-auto my-6 rounded-lg shadow bg-gray-800 border-gray-700'>
			<h5 class='mb-2 text-2xl font-bold tracking-tight text-white text-center pt-6'>
				EUR to USD Converter
			</h5>
			<div className='w-full mx-auto flex justify-center items-center pb-6'>
				<div className='flex flex-col justify-center items-center gap-4 w-2/3'>
					<TextInput value={fx} title='Fx Rate' />
					<TextInput
						value={amount}
						onChange={handleAmountChange}
						title='Enter Amount'
					/>
					<TextInput
						value={customFx}
						onChange={handleCustomFxChange}
						title='Custom Fx'
						disabled={!overrideFx}
					/>
					<TextInput value={result} title='Result' />
					<Button title='Convert' onClick={convertCurrency} />
				</div>
				<div>
					<Toggle
						title='USD -> EUR'
						value={currencyToggle}
						onChange={handleCurrencyToggleChange}
					/>
					<Toggle
						title='Override Fx'
						value={overrideFx}
						onChange={handleOverrideFx}
					/>
				</div>
			</div>
		</div>
	);
};

export default Converter;
