import './App.css'
import Navbar from './page/Navbar/Navbar'
import Home from './page/Home/Home'
import { Route } from 'react-router-dom'
import { Portfolio } from './page/Portfolio/Portfolio'
import { Activity } from './page/Activity/Activity'
import { Wallet } from './page/Wallet/Wallet'
import { Withdrawal } from './page/Withdrawal/withdrawal'
import { PaymentDetals } from './page/Paymentdetails/PaymentDetals'
import { StockDetails } from './page/StockDetails/StockDetails'
import { WatchList } from './page/Watchlist/WatchList'
import { Profile } from './page/Profile/Profile'
import { SearchCoin } from './page/Search/SearchCoin'
import { NotFound } from './page/NotFound/NotFound'

function App() {

  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/potfolio" element={<Portfolio />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/payment-details" element={<PaymentDetals />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/market/:id" element={<StockDetails />} />
        <Route path="/watchList" element={<WatchList />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />




      </Routes>
      <Home />
    </>
  )
}

export default App
