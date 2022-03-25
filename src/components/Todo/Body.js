import Item from './partial/Item'

const Body = () => {
  const data = [{id: 1, name: 'quan'}]
  return (
    <section className="todo-wrapper">
      <ul className="todo-list">
        {data.map(item => {
          return <Item key={item.id} data={item}/>
        })}
      </ul>
    </section>
  )
}

export default Body;