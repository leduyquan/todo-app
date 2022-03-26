import Button from './partial/Button';
import { useCallback, useRef } from 'react';
import { useStore } from './../../helpers'
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
    <header className="header">
      <div className="title">
        <h1>todos</h1>
        <Button value={store.theme === 'light'} onClick={handleToggle}>
          <img
            src={store.theme === 'light' ?
              'https://developer.mozilla.org/static/media/theme-light.af1aa388.svg' :
              'https://developer.mozilla.org/static/media/theme-dark.2204a73b.svg'
            }
            alt=""
          />
          <span>Theme</span>
        </Button>
      </div>
      <input
        ref={inputRef}
        type="text"
        className="new-todo"
        placeholder="Enter new job..."
        onKeyUp={onKeyUp}
      />
    </header>
  )
}

export default Header;