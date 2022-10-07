import React, { FC } from 'react'
import Cards from './card'
import { IProps } from './props.interface'

const Projects: FC<IProps> = () => {
  const cards = [
    {
      name: 'card 1'
    },
    {
      name: 'card 2'
    },
    {
      name: 'card 3'
    },
    {
      name: 'card 4'
    }
  ]

  return (
    <div className="main_projects">
      <div className=" title_project">
        <h1>Nuestros proyectos</h1>
      </div>
      <div className="project_cards">
        import {Cards} from "./Projects/card";
        {cards.map(card => (
          <div className="son_card">{card.name}</div>
        ))}
      </div>
    </div>
  )
}

export default Projects
