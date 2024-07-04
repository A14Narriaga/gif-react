import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Card } from "@src/modules"

describe("Tests in <Card.tsx />", () => {
	const gif = {
		title: "Test Gif",
		imgUrl: "https://example.com/test.gif"
	}

	test("Shoud match with snapshot", () => {
		const { container } = render(<Card {...gif} />)
		expect(container).toMatchSnapshot()
	})

	test("Should show the image with the correct url and alt", () => {
		render(<Card {...gif} />)
		// screen.debug()
		const { alt, src } = screen.getByRole<HTMLImageElement>("img")
		expect(alt).toBe(gif.title)
		expect(src).toBe(gif.imgUrl)
	})

	test("Should show the title", () => {
		render(<Card {...gif} />)
		const element = screen.getByText(gif.title)
		expect(element).toBeTruthy()
	})
})
