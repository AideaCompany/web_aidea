import Aliados from 'components/Aliados'
import Layout from 'components/Layout'
import Topic from 'components/Topic'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="main_container">
      <Layout>
        <>
          <Topic></Topic>
          <Aliados> </Aliados>
        </>
      </Layout>
    </div>
  )
}

export default Home
