import React, { FC } from 'react'
import Cards from './card'
import { IProps } from './props.interface'

const Projects: FC<IProps> = () => {
  const cards = [
    {
      name: 'card 1',
      title: '  Titulo 1'
    },
    {
      name: 'card 2',
      title: '  Titulo 2'
    },
    {
      name: 'card 3',
      title: '  Titulo 3'
    },
    {
      name: 'card 4',
      title: '  Titulo 4'
    }
  ]

  return (
    <div className="main_projects">
      <div className=" title_project">
        <h1>Nuestros proyectos</h1>
      </div>
      <div className="project_cards">
        {cards.map(card => (
          <Cards>{card.name}</Cards>
        ))}
      </div>
    </div>
  )
}

export default Projects
