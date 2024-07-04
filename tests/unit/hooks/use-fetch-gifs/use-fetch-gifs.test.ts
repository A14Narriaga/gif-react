import { renderHook, waitFor } from "@testing-library/react"
import { describe } from "vitest"

import { useFetchGifs } from "@src/hooks"
describe("Tests in useFetchGifts", () => {
	const searchTest = "attack on titan"

	test("should return the initial state", () => {
		const { result } = renderHook(() => useFetchGifs(searchTest))
		const { gifs, loading } = result.current
		expect(gifs.length).toBe(0)
		expect(loading).toBeTruthy()
	})

	test("should return an array of gifs and loading in false", async () => {
		const { result } = renderHook(() => useFetchGifs(searchTest))
		await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0))
		const { gifs, loading } = result.current
		expect(gifs.length).toBeGreaterThan(0)
		expect(loading).toBeFalsy()
	})
})
