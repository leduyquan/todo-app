import { ADD_JOB, DELETE_JOB, UPDATE_JOB, UPDATE_JOB_STATUS, CHANGE_JOB_FILTER } from './constants'
import storage from '../util/storage'

const initState = {
  jobs: storage.get(),
  filter: 'all',
  filters: {
    all: {
      name: 'All',
      action: () => true
    },
    active: {
      name: 'Active',
      action: job => !job.done
    },
    done: {
      name: 'Done',
      action: job => job.done
    }
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_JOB:
      const dataAdd = [...state.jobs, action.payload]
      storage.set(dataAdd)
      return {
        ...state,
        jobs: dataAdd
      }
    case DELETE_JOB:
      const dataFilter = state.jobs.filter(item => item.id !== action.id)
      storage.set(dataFilter)
      return {
        ...state,
        jobs: dataFilter
      }
    case UPDATE_JOB:
      const dataUpdate = state.jobs.map(item => {
        if (item.id === action.id) {
          return { ...action.payload }
        }
        return item
      })
      storage.set(dataUpdate)
      return {
        ...state,
        jobs: dataUpdate
      }
    case UPDATE_JOB_STATUS:
      const dataToggleStatus = state.jobs.map(item => {
        if (action.ids.includes(item.id)) {
          return { ...item, done: !item.done }
        }
        return item
      })
      storage.set(dataToggleStatus)
      return {
        ...state,
        jobs: dataToggleStatus
      }
    case CHANGE_JOB_FILTER:
      return {
        ...state,
        filter: action.name
      }
    default:
      return state
  }
}

export { initState }
export default reducer