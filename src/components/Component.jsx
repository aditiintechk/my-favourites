import '../App.css'

export default function Component(props) {
	const {
		category,
		title,
		year,
		duration,
		episodes,
		imdbRating,
		description,
	} = props.item

	let episodesDefined
	if (episodes === undefined) episodesDefined = ''
	else episodesDefined = `| Episodes: ${episodes}`

	return (
		<div>
			<div className='content'>
				<p>Category: {category}</p>
				<p>Name: {title}</p>
				<p>
					Year: {year} | Duration: {duration} {episodesDefined}
				</p>
				<p>IMDb Rating: {imdbRating}</p>
				<p>Description: {description}</p>
			</div>
		</div>
	)
}
