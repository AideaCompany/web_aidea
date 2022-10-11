import { FC } from 'react'
import { IProps } from './props.interface'
import { SendOutlined, InstagramOutlined, FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const Footer: FC<IProps> = () => {
  return (
    <div className="main_footer">
      <div className="container_footer">
        <div className="container_left">
          <h2>Aidea</h2>

          <p className="slogan">Eslogan o frase relacionada </p>
          <div className="social_networks">
            <Button>
              <InstagramOutlined />
            </Button>
            <Button>
              <FacebookOutlined />
            </Button>
            <Button>
              <TwitterOutlined />
            </Button>
            <Button>
              <LinkedinOutlined />
            </Button>
          </div>
        </div>
        <div className="container_right">
          <h6>Portafolio</h6>
          <div className=" footer_briefcase">
            <a href="link">Proyecto #1</a>
            <a href="link">Proyecto #2</a>
            <a href="link">Proyecto #3</a>
            <a href="link">Proyecto #4</a>
          </div>
        </div>
      </div>
      <div className="text2_footer">
        <h3>Todos los derechos reservados @ Aidea 2022.</h3>
      </div>
    </div>
  )
}

export default Footer
