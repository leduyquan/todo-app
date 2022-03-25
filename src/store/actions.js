import { ADD_JOB, REMOVE_JOB, GET_JOB_FILTER } from './constants'

export const addJob = payload => ({
  type: ADD_JOB,
  payload
})

export const removeJob = id => ({
  type: REMOVE_JOB,
  id
})

export const getJobFilter = name => ({
  type: GET_JOB_FILTER,
  name
})