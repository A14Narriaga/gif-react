import { describe, test } from "vitest"

import { getGifs } from "@src/utilities"

describe("Test in gif.utility", () => {
	test("Should return an array of gifs", async () => {
		const search = "Attack on titan"
		const gifs = await getGifs(search)
		const testGif = {
			id: expect.any(String) as unknown as string,
			title: expect.any(String) as unknown as string,
			imgUrl: expect.any(String) as unknown as string
		}
		expect(gifs.length).toBeGreaterThan(0)
		expect(gifs[0]).toEqual(testGif)
	})
})
