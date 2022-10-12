import Footer from 'components/Footer'
import Layout from 'components/Layout'
import News from 'components/News'
import Projects from 'components/Projects'
import Slogan from 'components/Slogan/Index'
import Aliados from 'components/Aliados'
import Topic from 'components/Topic'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="main_container">
      <Layout>
        <>
          <Slogan />
          <Topic />
          <Projects />
          <News />
          <Aliados />
          <Footer />
        </>
      </Layout>
    </div>
  )
}

export default Home
