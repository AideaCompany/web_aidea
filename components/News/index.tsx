import { FC } from 'react'
import { IProps } from './props.interface'
import { Button } from 'antd'
import { SendOutlined, InstagramOutlined, FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons'

const News: FC<IProps> = () => {
  return (
    <>
      <div className="main_news">
        <div className="tittle_news">
          <h3> Enterate de nuestras últimas noticias</h3>
        </div>

        <div className="container_news">
          <div className="container_cards">
            <h4>News Letter!</h4>
            <div className="input">
              <input type="text" placeholder="your@email.com"></input>
              <Button>
                <SendOutlined style={{ color: '#747474' }} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default News
