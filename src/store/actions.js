import { ADD_JOB, DELETE_JOB, UPDATE_JOB, UPDATE_JOB_STATUS, CHANGE_JOB_FILTER } from './constants'

export const addJob = payload => ({
  type: ADD_JOB,
  payload
})

export const deleteJob = id => ({
  type: DELETE_JOB,
  id
})

export const updateJob = (id, payload) => ({
  type: UPDATE_JOB,
  id,
  payload
})

export const updateJobStatus = ids => ({
  type: UPDATE_JOB_STATUS,
  ids
})

export const changeJobFilter = name => ({
  type: CHANGE_JOB_FILTER,
  name
})