import { useState } from "react";
import { StyledLi } from './styled-custom'

const Item = ({data, onDelete, onSwitchStatus}) => {
  const [deleted, setDeleted] = useState(false)

  const handleDelete = (id) => {
    setDeleted(true)
    setTimeout(() => onDelete(id), 500)
  }

  return (
    <StyledLi className={deleted ? 'deleted' : ''} done={data.done} >
      <div className="view">
        <label onClick={() => onSwitchStatus(data)}>{data.name}</label>
        <button className="destroy" onClick={() => handleDelete(data.id)}></button>
      </div>
		</StyledLi>
  )
}

export default Item;