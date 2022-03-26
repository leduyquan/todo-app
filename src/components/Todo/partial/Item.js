import { useState, useMemo } from "react";

const Item = ({data, onDelete, onSwitchStatus}) => {
  const [deleted, setDeleted] = useState(false)

  const classItem = useMemo(() => {
    const classes = []
    data.done && classes.push('done')
    deleted && classes.push('deleted')
    return classes.join(' ')
  }, [data.done, deleted])

  const handleDelete = (id) => {
    setDeleted(true)
    setTimeout(() => onDelete(id), 500)
  }

  return (
    <li className={classItem}>
      <div className="view">
        <label onClick={() => onSwitchStatus(data)}>{data.name}</label>
        <button className="destroy" onClick={() => handleDelete(data.id)}></button>
      </div>
		</li>
  )
}

export default Item;