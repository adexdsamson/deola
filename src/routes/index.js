import { Routes, Route } from 'react-router-dom';
import Layout from '../common/Layout';
import { Home, About, Skills, BackgroundExperience } from '../features';
import { HOME_ROUTE, ABOUT_ROUTE, SKILLS_ROUTE, BACKGROUND_ROUTE } from './constant';


const RouteComponent = () => {
  return (
    <Layout>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={ABOUT_ROUTE} element={<About />} />
        <Route path={SKILLS_ROUTE} element={<Skills />} />
        <Route path={BACKGROUND_ROUTE} element={<BackgroundExperience />} />
      </Routes>
    </Layout>
  )
}

export default RouteComponent;