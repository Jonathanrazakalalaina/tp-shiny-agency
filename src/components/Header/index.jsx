import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/survey">Questionnaire</Link>
      </nav>
    </div>
  )
}

export default Header
