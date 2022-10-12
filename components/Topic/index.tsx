import { Button } from 'antd'
import { FC } from 'react'
import { IProps } from './props.interface'

const Topic: FC<IProps> = () => {
  const buttons = [
    {
      name: 'boton 1'
    },
    {
      name: 'boton 2'
    },
    {
      name: 'boton 3'
    },
    {
      name: 'boton 4'
    }
  ]
  return (
    <div className="main_topic">
      <div className="description">
        <div className="tittle_description">
          <h1>Titulo del tema a tratar </h1>
        </div>
        <div className="text_description">
          <p>
            Texto breve en relación al tema a tratar acompañado con una imagen de fondo que cambiara a medida que se seleccione el botón
            correspondiente
          </p>
        </div>
      </div>
      <div className="buttons">
        {buttons.map(button => (
          <div className="son_button">{button.name}</div>
        ))}
      </div>
    </div>
  )
}

export default Topic
