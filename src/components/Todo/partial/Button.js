import { memo, useMemo } from 'react'

const Button = (props) => {
  const { value, selected, onClick, className, children } = props

  const classBtn = useMemo(() => {
    const classes = []
    selected && classes.push('selected')
    className && classes.push(className || '')
    return classes.join(' ')
  }, [selected, className])


  return (
    <button
      className={classBtn}
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  )
}

export default memo(Button);