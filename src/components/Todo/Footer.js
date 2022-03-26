import { useState, useCallback } from 'react'
import { useStore } from './../../helpers'
import { actions } from '../../store'
import Button from './partial/Button'

const Footer = () => {
	const [store, dispatch] = useStore()
	const [toggle, setToggle] = useState(true)
	const jobs = store.jobs.filter(store.filters[store.filter]['action'])

	const handleFilter = useCallback((id) => {
		dispatch(actions.changeJobFilter(id))
	}, [dispatch])

	const handleToggle = useCallback((toggle) => {
		const filterIds = jobs.map(item => item.id)
		dispatch(actions.updateJobStatus(filterIds))
		setToggle(!toggle)
	}, [dispatch, jobs])

  return (
    <footer className="footer">
			<ul className="filters">
				{Object.keys(store.filters).map(key => {
					return (
						<li key={key}>
							<Button
								value={key}
								selected={store.filter === key}
								onClick={handleFilter}
							>
								{store.filters[key].name}
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