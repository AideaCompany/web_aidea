import { FC } from "react"
import { IProps } from "./props.interface"


const News: FC<IProps> = () => {
  return (
    <div className="main_news">
      <div className="tittle_news">
        <h3> Enterate de nuestras noticias</h3>
      </div>
      <div className="Button_news">
      {cards.map(card => (
          <div className="son_card">{card.name}</div>
    </div>
  )
}

export default News

