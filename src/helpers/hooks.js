import { useContext } from "react";
import StoreContext from './context'

export const useStore = () => {
  const [state, dispatch] = useContext(StoreContext)
  return [state, dispatch]
}