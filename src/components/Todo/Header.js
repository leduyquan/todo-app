import Button from './partial/Button';
import { forwardRef } from 'react';

const Header = (props, ref) => {
  const {theme, handleToggle, onKeyUp} = props
  return (
    <header className="header">
      <div className="title">
        <h1>todos</h1>
        <Button value={theme} onClick={handleToggle}>
          <img
            src={theme ?
              'https://developer.mozilla.org/static/media/theme-light.af1aa388.svg' :
              'https://developer.mozilla.org/static/media/theme-dark.2204a73b.svg'
            }
            alt=""
          />
          <span>Theme</span>
        </Button>
      </div>
      <input
        ref={ref}
        type="text"
        className="new-todo"
        placeholder="Enter new job..."
        onKeyUp={onKeyUp}
      />
    </header>
  )
}

export default forwardRef(Header);