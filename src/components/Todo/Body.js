import Item from './partial/Item';

const Body = (props) => {
  const { jobs, handleDeleteJob, handleSwitchStatus } = props

  return (
    <section className="todo-wrapper">
      <ul data-testid="listTodo" className={`todo-list ${jobs.length > 5 ? 'scrollbar' : ''}`}>
        {jobs.map(item => {
          return <Item
            key={item.id}
            data={item}
            onSwitchStatus={handleSwitchStatus}
            onDelete={handleDeleteJob}
          />
        })}
        {jobs.length === 0 && <li className='not-found'>Job not found!</li>}
      </ul>
    </section>
  )
}

export default Body;