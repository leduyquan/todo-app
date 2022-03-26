import HeaderComponent from '../../components/Todo/Header';
import { useCallback, useRef } from 'react';
import { useStore } from '../../helpers'
import { actions } from '../../store';

const Header = () => {
  const [store, dispatch] = useStore()
  const inputRef = useRef()

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      const payload = {
        id: 'id_' + (new Date()).getTime(),
        name: e.target.value.trim(),
        done: false
      }
      dispatch(actions.addJob(payload))
      inputRef.current.value = ''
    }
  }

  const handleToggle = useCallback(() => {
		const themeSelected = store.theme === 'light' ? 'dark' : 'light'
    dispatch(actions.changeTheme(themeSelected))
	}, [dispatch, store.theme])

  return (
    <HeaderComponent
      ref={inputRef}
      theme={store.theme === 'light'}
      handleToggle={handleToggle}
      onKeyUp={onKeyUp}
    >
    </HeaderComponent>
  )
}

export default Header;