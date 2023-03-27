import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Converter from "./converter";

it("disables custom fx field if override fx is false", () => {
	render(<Converter />);
	expect(screen.getByRole("textbox", { name: "Custom Fx" })).toBeDisabled();
});

it("enables custom fx field when override fx is true", () => {
	render(<Converter />);
	const toggleCustomFx = screen.getByRole("checkbox", { name: "Override Fx" });

	fireEvent.click(toggleCustomFx);

	expect(screen.getByRole("textbox", { name: "Custom Fx" })).toBeEnabled();
});

it("does not use custom fx if percentage difference is more than 2", () => {
	render(<Converter />);
	const toggleCustomFx = screen.getByRole("checkbox", { name: "Override Fx" });
	const submit = screen.getByRole("button", { name: "Convert" });
	const customFxField = screen.getByRole("textbox", { name: "Custom Fx" });
	const eurField = screen.getByRole("textbox", { name: "EUR" });

	// act(() => {
	// 	fireEvent.click(toggleCustomFx);
	// 	userEvent.type(customFxField, "2");
	// 	userEvent.type(eurField, "1");
	// 	fireEvent.click(submit);
	// });

	fireEvent.click(toggleCustomFx);
	userEvent.type(customFxField, "2");
	userEvent.type(eurField, "1");
	fireEvent.click(submit);

	expect(screen.getByRole("textbox", { name: "USD" })).toHaveValue("1.1");
});

it("changes EUR field value when USD to EUR toggle is true", () => {
	render(<Converter />);
	const toggleUsdToEur = screen.getByRole("checkbox", { name: "USD -> EUR" });
	const submit = screen.getByRole("button", { name: "Convert" });
	const usdField = screen.getByRole("textbox", { name: "USD" });

	fireEvent.click(toggleUsdToEur);
	userEvent.type(usdField, "1.1");
	fireEvent.click(submit);

	expect(screen.getByRole("textbox", { name: "EUR" })).toHaveValue("1");
});

it("does not let user change Fx Rate field value", () => {
	render(<Converter />);

	const fxRate = screen.getByRole("textbox", { name: "Fx Rate" });

	userEvent.type(fxRate, "2");

	expect(fxRate).toHaveValue("1.10");
});
