import { useReducer } from "react";
import reducer, { initState } from '../store/reducer'
import Context from './context';
import logger from "./logger";

const Provider = ({children}) => {
  const [state, dispatch] = useReducer(logger(reducer), initState)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default Provider;