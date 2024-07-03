import { IGif, ISearchResponse } from "@src/interfaces"

const env = import.meta.env
const BASE_URL = env.VITE_GIPHY_BASE_URL as string
const API_KEY = env.VITE_GIPHY_API_KEY as string

export const getGifs = async (search: string) => {
	const params = `?api_key=${API_KEY}&q=${search}&limit=10`
	const url = `https://${BASE_URL}/search${params}`
	const res = await fetch(url)
	const { data } = (await res.json()) as ISearchResponse
	const gifs: IGif[] = data.map((gif) => ({
		id: gif.id,
		title: gif.title,
		imgUrl: gif.images.downsized_medium.url
	}))
	return gifs
}
