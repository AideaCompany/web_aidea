import type { NextPage } from 'next'
import { Button } from 'antd'

const Layout: NextPage = () => {
  return (
    <div className="main_layout">
      <div className="father">
        <div className="father_logo"> </div>
        <div className="father_buttons">
          <Button>Menu</Button>
          <Button>Menu</Button>
          <Button>Menu</Button>
          <Button>Menu</Button>
          <Button>Contacto</Button>
        </div>
      </div>
    </div>
  )
}

export default Layout
