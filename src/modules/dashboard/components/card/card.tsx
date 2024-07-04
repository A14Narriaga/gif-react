export const Card = ({ title, imgUrl }: { title: string; imgUrl: string }) => {
	return (
		<div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<img
				className="rounded-t-lg"
				src={imgUrl}
				alt={title}
			/>
			<div className="p-5">
				<p className="font-normal text-gray-700 dark:text-gray-400 truncate">
					{title}
				</p>
			</div>
		</div>
	)
}
