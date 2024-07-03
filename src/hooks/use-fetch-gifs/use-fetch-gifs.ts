import { useEffect, useState } from "react"

import { IGif } from "@src/interfaces"
import { getGifs } from "@src/utilities"

export const useFetchGifs = (search: string) => {
	const [gifs, setGifs] = useState<IGif[]>([])
	const [loading, setLoading] = useState(true)

	const getGifsBySearch = async () => {
		const gifs = await getGifs(search)
		setGifs(gifs)
		setLoading(false)
	}

	useEffect(() => {
		void getGifsBySearch()
	}, [])

	return {
		gifs,
		loading
	}
}
