import { Navbar } from './shared';

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      {children}
      <div className="fixed right-5 flex item-center top-14 z-50 translate-y-1/2">
        <Navbar />
      </div>
    </div>
  )
}

export default Layout;