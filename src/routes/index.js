import { Routes, Route } from 'react-router-dom';
import Layout from '../common/Layout';
import { Home } from '../features';


const RouteComponent = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default RouteComponent;