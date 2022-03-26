import Button from './partial/Button';
import { useState, useCallback, useRef } from 'react';
import { useStore } from './../../helpers'
import { actions } from '../../store';

const Header = () => {
  const [store, dispatch] = useStore()
  const [toggle, setToggle] = useState(false)
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

  const handleToggle = useCallback((toggle) => {
		setToggle(!toggle)
	}, [])

  return (
    <header className="header">
      <div className="title">
        <h1>todos</h1>
        <Button value={toggle} onClick={handleToggle}>
          <img
            src={toggle ?
              'https://developer.mozilla.org/static/media/theme-dark.2204a73b.svg' :
              'https://developer.mozilla.org/static/media/theme-light.af1aa388.svg'}
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