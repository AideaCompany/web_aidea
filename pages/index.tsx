import Footer from 'components/Footer'
import Layout from 'components/Layout'
import News from 'components/News'
import Projects from 'components/Projects'
import Slogan from 'components/Slogan/Index'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="main_container">
      <Layout>
        <>
          <Slogan />
          <Projects />
          <News />
          <Footer />
        </>
      </Layout>
      {/* <Layout children={<></>}/>    */}
    </div>
  )
}

export default Home
