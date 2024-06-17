import './App.css'
import Component from './components/Component.jsx'
import data from './utility/data.js'

function App() {
	let items = data.map((item) => {
		return <Component key={item.id} item={item} />
	})
	return <div>{items}</div>
}

export default App
