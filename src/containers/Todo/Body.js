import BodyComponent from '../../components/Todo/Body';
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
    <BodyComponent
      jobs={jobs}
      handleSwitchStatus={handleSwitchStatus}
      handleDeleteJob={handleDeleteJob}
    ></BodyComponent>
  )
}

export default Body;