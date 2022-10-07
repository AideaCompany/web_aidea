import { FC } from 'react'
import { IProps } from './props.interface'

const Cards: FC<IProps> = () => {
  return (
    <div className="Cards">
      <div className=" title_cards"> titulo 1</div>
      <div className="image_card">
        <img src="prueba.png" />
      </div>
    </div>
  )
}

export default Cards
