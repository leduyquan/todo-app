import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App'
import Header from './components/Todo/Header'
import Body from './components/Todo/Body'
import Footer from './components/Todo/Footer'
import reducer, {initState} from './store/reducer'
import { actions } from './store'

test('should return the initial state', () => {
  expect(reducer(initState, {})).toEqual({
    jobs: [],
    theme: 'light',
    filter: 'all',
    ...initState
  })
})

test('should handle a todo being added to an existing list', () => {
  const workJob = {
    id: 'id_test',
    name: 'Todo Work',
    done: false
  }
  const state = reducer(initState, actions.addJob(workJob))
  const jobState = state.jobs[0]
  expect(jobState).toEqual(workJob)
})

test('should handle a todo being removed', () => {
  const workJob = {
    id: 'id_test',
    name: 'Todo Work',
    done: false
  }
  reducer(initState, actions.addJob(workJob))
  const state = reducer(initState, actions.deleteJob('id_test'))
  const jobStateList = state.jobs
  expect(jobStateList.length).toBe(0)
})

describe('Header component', () => {
  test('create a todo', () => {
    render(<Header />);
    const inputElement = screen.getByRole('textbox');
    userEvent.type(inputElement, 'Todo Work');
    expect(inputElement.value).toEqual('Todo Work');
  });
})