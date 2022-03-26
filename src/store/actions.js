import { ADD_JOB, DELETE_JOB, UPDATE_JOB, UPDATE_JOB_STATUS, CHANGE_JOB_FILTER, CHANGE_THEME } from './constants'

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

export const changeJobFilter = payload => ({
  type: CHANGE_JOB_FILTER,
  payload
})

export const changeTheme = payload => ({
  type: CHANGE_THEME,
  payload
})