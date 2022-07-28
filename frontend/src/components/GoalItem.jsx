import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <ul>
        <li>{new Date(goal.createdAt).toLocaleString('pt-BR')}</li>
        <li><h2>{goal.text}</h2></li>
        <li>
          <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
            X
          </button>
        </li>
      </ul>
    </div>
  )
}

export default GoalItem
