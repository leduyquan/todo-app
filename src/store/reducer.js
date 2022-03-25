import { ADD_JOB, REMOVE_JOB, GET_JOB_FILTER } from './constants'

const initState = {
  jobs: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
    case REMOVE_JOB:
      return []
    case GET_JOB_FILTER:
      return []
    default:
      return state
  }
}

export { initState }
export default reducer