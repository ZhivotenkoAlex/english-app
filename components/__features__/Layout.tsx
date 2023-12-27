
// import Footer from './footer'
import TopNavbar from './TopNavbar'
 
export default function Layout({ children }) {
  return (
    <>
      <TopNavbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}