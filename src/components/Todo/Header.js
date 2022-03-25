import Button from './partial/Button';
import { useState, useCallback } from 'react';
import { useStore } from './../../helpers'
import { actions } from '../../store';

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [state, dispatch] = useStore()

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      const payload = {
        id: 'id_' + (new Date()).getTime(),
        name: e.target.value.trim(),
        status: true
      }
      dispatch(actions.addJob(payload))
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
        type="text"
        className="new-todo"
        placeholder="Enter new job..."
        autoFocus
        onKeyUp={onKeyUp}
        // onChange={(e) => setJob(e.target.value)}
      />
    </header>
  )
}

export default Header;