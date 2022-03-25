import { useState, useMemo, useCallback } from 'react'
import Button from './partial/Button'

const Footer = () => {
	const [selected, setSelected] = useState('all')
	const [toggle, setToggle] = useState(true)

	const actionList = useMemo(() => [
		{id: 'all', name: 'All'},
		{id: 'active', name: 'Active'},
		{id: 'completed', name: 'Completed'},
	], [])

	const handleFilter = useCallback((id) => {
		setSelected(id)
	}, [])

	const handleToggle = useCallback((toggle) => {
		setToggle(!toggle)
	}, [])

  return (
    <footer className="footer">
			<ul className="filters">
				{actionList.map(item => {
					return (
						<li key={item.id}>
							<Button
								value={item.id}
								selected={selected === item.id}
								onClick={handleFilter}
							>
								{item.name}
							</Button>
						</li>
					)
				})}
			</ul>
			<Button
				value={toggle}
				selected={toggle}
				className="toggle-all"
				onClick={handleToggle}
			>
				Toggle All
			</Button>
		</footer>
  )
}

export default Footer;