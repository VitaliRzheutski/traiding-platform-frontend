import { Input } from '@/components/ui/input'
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { DotIcon } from "lucide-react"
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { getUserWallet } from '@/State/Wallet/Action'
import { getAssetDetails } from '@/State/Asset/Action'
import { payOrder } from '@/State/Order/Action'

export const TreadingForm = () => {
    const [orderType, setOrderType] = useState("BUY");
    const [amount, setAmount] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const { asset } = useSelector(store => store)
    const dispatch = useDispatch()
    const coin = useSelector(store => store.coin.coinDetails)
    const wallet = useSelector(store => store.wallet.userWallet)

    useEffect(() => {
        dispatch(getUserWallet(localStorage.getItem("jwt")))
        dispatch(getAssetDetails({ coinId: coin.id, jwt: localStorage.getItem("jwt") }))
    }, [])


    const handleChange = (e) => {
        const amount = e.target.value;
        setAmount(amount);
        const volume = calculateByCost(amount, coin.market_data.current_price.usd);
        setQuantity(volume);
    }

    const calculateByCost = (amount, price) => {
        let volume = amount / price;
        let decimalPlaces = Math.max(2, price.toString().split(".")[0].length);

        return volume.toFixed(decimalPlaces);
    }

    const handleBuyCrypto = () => {
        dispatch(payOrder({
            jwt: localStorage.getItem("jwt"),
            amount,
            orderData: {
                coinId: coin?.id,
                quantity,
                orderType
            }

        }))
    }
    return (
        <div className='space-y-10 p-5'>
            <div>
                <div className='flex gap-4 items-center justify-between'>
                    <Input
                        className="py-7 focus:outline-none"
                        placeholder="Enter amount"
                        onChange={handleChange}
                        type="number"
                        name="amount"
                    />

                    <div>
                        <p className='border text-2xl flex justify-center items-center w-36 h-14 rounded-md'>
                            {quantity}
                        </p>
                    </div>

                </div>
                {false && <h1 className='text-red-600 text-center pt-4'>Insufficient wallet balance to buy</h1>}
            </div>

            <div className="flex gap-5 items-center">
                <div>
                    <Avatar>
                        <AvatarImage src={coin?.image.small} />

                    </Avatar>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <p>BTC</p>
                        <DotIcon className="text-gray-400" />
                        <p className="text-gray-400">  </p>
                    </div>
                    <div className="flex items-end gap-2">
                        <p className="text-xl font-bold">${coin?.market_data.current_price.usd}</p>
                        <p className="text-red-600">
                            <span>{coin?.market_data.market_cap_change_24h}</span>
                            <span>({coin?.market_data.market_cap_change_percentage_24h}%)</span>
                        </p>
                    </div>
                </div>

            </div>

            <div className='flex items-center justify-between'>
                <p>Order Type</p>
                <p>Market Order</p>
            </div>
            <div className='flex items-center justify-between'>
                <p>{orderType == "BUY" ? "Available Cash" : "Available Quantity"}</p>
                <p>{orderType == "BUY" ? "$" + wallet?.balance : (asset.assetDetails?.quantity || 0)}</p>
            </div>

            <div>
                <Button
                    onClick={handleBuyCrypto}
                    className={`w-full py-6
                    ${orderType == "SELL" ? "bg-red-600 text-white" : ""}
                    `}>
                    {orderType}
                </Button>
                <Button
                    variant="link"
                    className="w-full mt-5 text-xl"
                    onClick={() => setOrderType(orderType == "BUY" ? "SELL" : "BUY")}>
                    {orderType == "BUY" ? "Or Sell" : "Or Buy"}
                </Button>
            </div>

        </div>
    )
}
