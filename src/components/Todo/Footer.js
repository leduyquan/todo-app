import Button from './partial/Button'

const Footer = (props) => {
	const { store, toggle, handleFilter, handleToggle } = props

  return (
    <footer className="footer">
			<ul className="filters">
				{Object.keys(store.filters).map(key => {
					return (
						<li key={key}>
							<Button
								type="default"
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
				type="primary"
				value={toggle}
				selected={toggle}
				onClick={handleToggle}
			>
				Toggle All
			</Button>
		</footer>
  )
}

export default Footer;