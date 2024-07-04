import { fireEvent, render, screen } from "@testing-library/react"
import { describe } from "vitest"

import { Input } from "@src/modules"

describe("Tests in <Input.tsx>", () => {
	const testValue = "attack on titan"

	test("Should change the value in searchbox", () => {
		render(<Input onSearch={() => {}} />)
		const input = screen.getByRole<HTMLInputElement>("searchbox")
		const options = { target: { value: testValue } }
		fireEvent.input(input, options)
		// screen.debug()
		expect(input.value).toBe(testValue)
	})

	test("Should execute onSearch if the input has a value", () => {
		const onSearch = vitest.fn()
		render(<Input onSearch={onSearch} />)
		const input = screen.getByRole<HTMLInputElement>("searchbox")
		const form = screen.getByTestId<HTMLFormElement>("input-form")
		const options = { target: { value: testValue } }
		fireEvent.input(input, options)
		fireEvent.submit(form)
		expect(input.value).toBe("")
		expect(onSearch).toHaveBeenCalledTimes(1)
		expect(onSearch).toHaveBeenCalledWith(testValue)
	})

	test("Should not execute onSearch if the input is empty", () => {
		const onSearch = vitest.fn()
		render(<Input onSearch={onSearch} />)
		const form = screen.getByTestId<HTMLFormElement>("input-form")
		fireEvent.submit(form)
		expect(onSearch).not.toHaveBeenCalled()
	})
})
