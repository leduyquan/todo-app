import Item from './partial/Item';
import { useStore } from '../../helpers'
import { actions } from '../../store'

const Body = () => {
  const [store, dispatch] = useStore()
  const jobs = store.jobs.filter(store.filters[store.filter]['action'])

  const handleSwitchStatus = data => {
    const payload = {
      ...data,
      done: !data.done
    }
    dispatch(actions.updateJob(data.id, payload))
  }

  const handleDeleteJob = id => {
    dispatch(actions.deleteJob(id))
  }

  return (
    <section className="todo-wrapper">
      <ul className={`todo-list ${jobs.length > 5 ? 'scrollbar' : ''}`}>
        {jobs.map(item => {
          return <Item
            key={item.id}
            data={item}
            onSwitchStatus={handleSwitchStatus}
            onDelete={handleDeleteJob}
          />
        })}
        {jobs.length === 0 && <li className='not-found'>Job not found!</li>}
      </ul>
    </section>
  )
}

export default Body;