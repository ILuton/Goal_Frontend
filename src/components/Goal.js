import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers'
import React, {useState} from 'react'
import GoalForm from './GoalForm'
import GoalList from './GoalList'

function Goal() {

    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })
  return  goals.map((goal, index) => (
    <div className={goal.isComplete? "goalRow complete" : "goalRow complete"} key={index}></div>
  ))
}

export default Goal
