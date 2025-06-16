import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Result from "./pages/Result"
import BuyCredit from "./pages/BuyCredit"
import NotFound from "./pages/NotFound"
import Header from "./Components/Header"
import Footer from "./Components/Footer"


const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App