import Layout from 'components/Layout'
import Projects from 'components/Projects'
import Slogan from 'components/Slogan/Index'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="main_container">
      <Layout>
        <>
          <Slogan></Slogan>
          <Projects></Projects>
        </>
      </Layout>
      {/* <Layout children={<></>}/>    */}
    </div>
  )
}

export default Home
