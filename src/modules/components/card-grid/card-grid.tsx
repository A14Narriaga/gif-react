import { useFetchGifs } from "@src/hooks"

import { Card } from "../card"

interface CardGridProps {
	search: string
}

const toTitleCase = (value: string): string => {
	return value.replaceAll(/\b\w/g, (word) => word.toUpperCase())
}

export const CardGrid = ({ search }: CardGridProps) => {
	const { gifs, loading } = useFetchGifs(search)

	if (loading) return <p>Cargando...</p>

	return (
		<section className="bg-slate-700 p-2 rounded-lg">
			<p className="text-xl mb-3">{toTitleCase(search)}</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{gifs.map((gif) => (
					<Card
						key={gif.id}
						{...gif}
					/>
				))}
			</div>
		</section>
	)
}
