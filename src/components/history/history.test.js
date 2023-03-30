import { render, screen, waitFor } from "@testing-library/react";
import History from "./history";

it("displays history data", async () => {
	const historyData = [
		{
			fx: 1.12,
			currencyToggle: false,
			overrideFx: false,
			amount: 1.0,
			result: 1.12,
		},
		{
			fx: 1.12,
			currencyToggle: false,
			overrideFx: false,
			amount: 1.0,
			result: 1.12,
		},
		{
			fx: 1.12,
			currencyToggle: false,
			overrideFx: false,
			amount: 1.0,
			result: 1.12,
		},
		{
			fx: 1.12,
			currencyToggle: false,
			overrideFx: false,
			amount: 1.0,
			result: 1.12,
		},
		{
			fx: 1.12,
			currencyToggle: false,
			overrideFx: false,
			amount: 1.0,
			result: 1.12,
		},
	];
	render(<History historyData={historyData} />);

	const tableRows = await waitFor(() => screen.findAllByRole("row"));
	expect(tableRows).toHaveLength(6);
});

it("only displays latest 5 entries from the history array", async () => {
	const historyData = [
		{
			fx: 1.12,
			currencyToggle: false,
			overrideFx: false,
			amount: 1.0,
			result: 1.12,
		},
		{
			fx: 1.12,
			currencyToggle: false,
			overrideFx: false,
			amount: 1.0,
			result: 1.12,
		},
		{
			fx: 1.12,
			currencyToggle: false,
			overrideFx: false,
			amount: 1.0,
			result: 1.12,
		},
		{
			fx: 1.12,
			currencyToggle: false,
			overrideFx: false,
			amount: 1.0,
			result: 1.12,
		},
		{
			fx: 1.12,
			currencyToggle: false,
			overrideFx: false,
			amount: 1.0,
			result: 1.12,
		},
		{
			fx: 1.12,
			currencyToggle: false,
			overrideFx: false,
			amount: 1.0,
			result: 1.12,
		},
		{
			fx: 1.12,
			currencyToggle: false,
			overrideFx: false,
			amount: 1.0,
			result: 1.12,
		},
	];
	render(<History historyData={historyData} />);

	const tableRows = await waitFor(() => screen.findAllByRole("row"));
	expect(tableRows).toHaveLength(6);
});
