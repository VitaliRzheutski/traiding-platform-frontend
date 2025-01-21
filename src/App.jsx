import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Activity } from './page/Activity/Activity'
import Home from './page/Home/Home'
import Navbar from './page/Navbar/Navbar'
import { NotFound } from './page/NotFound/NotFound'
import { PaymentDetals } from './page/Paymentdetails/PaymentDetals'
import { Portfolio } from './page/Portfolio/Portfolio'
import { Profile } from './page/Profile/Profile'
import { StockDetails } from './page/StockDetails/StockDetails'
import { Wallet } from './page/Wallet/Wallet'
import { WatchList } from './page/Watchlist/WatchList'
import { Withdrawal } from './page/Withdrawal/Withdrawal'
import { Auth } from './page/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from './State/Auth/Action'

function App() {

  const { auth } = useSelector(store => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(auth.jwt || localStorage.getItem("jwt")))
  }, [auth.jwt])

  return (
    <>
      {auth.user ? <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
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

      </div> : <Auth />}

    </>
  )
}

export default App
