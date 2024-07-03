import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

import { CardGrid, Input } from "../components"

const initialState = ["attack on titans"]

export const Dashboard = () => {
	const [searches, setSearches] = useState(initialState)

	const addSearch = (search: string) => {
		if (searches.includes(search)) return
		setSearches([search, ...searches])
	}

	return (
		<div className="max-w-screen-lg mx-auto p-8 flex flex-col gap-7">
			<b className="text-3xl">Gif App</b>
			<Input onSearch={addSearch} />
			{searches.map((search) => (
				<CardGrid
					key={uuidv4()}
					search={search}
				/>
			))}
		</div>
	)
}
