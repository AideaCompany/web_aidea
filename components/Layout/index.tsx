import { Button } from 'antd'
import Link from 'next/link'
import { FC } from 'react'
import { IProps } from './props.interface'

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className="main_layout">
      <div className="father">
        <div className="father_logo">
          <img src="logo.png" />
        </div>
        <div className="father_buttons">
          <Button>Menu</Button>
          <Button>Menu</Button>
          <Button>Menu</Button>
          <Button>Menu</Button>
          <Button>Contacto</Button>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Layout
