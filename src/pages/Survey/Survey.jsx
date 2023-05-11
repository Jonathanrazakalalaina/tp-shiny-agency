import React from 'react'
import { Link } from 'react-router-dom'

const Survey = () => {
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <Link to="client">Questionnaire Client</Link>
      <Link to="freelance">Questionnaire Freelance</Link>
    </div>
  )
}

export default Survey
