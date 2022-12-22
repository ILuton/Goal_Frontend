import React, {useState} from 'react'
import GoalForm from './GoalForm'

function GoalList() {
    const [goals, setgoals] = useState([])

    const addGoal = goal => {
        if(!goal.text || /^\s*$/.test(goal.text)) {
            return 
        }

        const newGoals = [goal, ...goals]
        
        setgoals(newGoals)
    }

  return (
    <div>
      <h1>
        Goals For Tommorow
      </h1>
      <GoalForm onSubmit={addGoal}/>
    </div>
  )
}

export default GoalList
