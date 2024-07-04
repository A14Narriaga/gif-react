import { render, screen } from "@testing-library/react"
import { describe } from "vitest"

import * as hooks from "@src/hooks"
import { CardGrid } from "@src/modules"

describe("Tests in <CardGrid.tsx>", () => {
	const testSearch = "attack on titan"
	const mockUseFetchGifts = vitest.spyOn(hooks, "useFetchGifs")

	test("Shoud show loading initially", () => {
		mockUseFetchGifts.mockReturnValue({
			gifs: [],
			loading: true
		})
		render(<CardGrid search={testSearch} />)
		const element = screen.getByText("Cargando...")
		expect(element).toBeTruthy()
	})

	test("Shoud show items when images by useFetchGifts were loading", () => {
		const gif = {
			id: "Test id",
			title: "Test title",
			imgUrl: "Test image url"
		}
		mockUseFetchGifts.mockReturnValue({
			gifs: [gif],
			loading: false
		})
		render(<CardGrid search={testSearch} />)
		const numOfImgs = screen.getAllByRole("img").length
		expect(numOfImgs).toBe(1)
	})
})
