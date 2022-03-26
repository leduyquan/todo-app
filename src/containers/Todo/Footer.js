import FooterComponent from '../../components/Todo/Footer'
import { useState, useCallback } from 'react'
import { useStore } from '../../helpers'
import { actions } from '../../store'

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
    <FooterComponent
      store={store}
      toggle={toggle}
      handleFilter={handleFilter}
      handleToggle={handleToggle}
    ></FooterComponent>
  )
}

export default Footer;