import { Button } from 'antd'
import { FC } from 'react'
import { IProps } from './props.interface'

const Aliados: FC<IProps> = () => {
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
    },
    {
      name: 'boton 5'
    },
    {
      name: 'boton 6'
    },
    {
      name: 'boton 7'
    },
    {
      name: 'boton 8'
    }
  ]
  return (
    <div className="main_aliados">
      <div className="tittle">
        <h1> Con quien trabajamos</h1>
        <div className="buttons">
          {buttons.map(button => (
            <div className="daughter_button">{button.name}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Aliados
