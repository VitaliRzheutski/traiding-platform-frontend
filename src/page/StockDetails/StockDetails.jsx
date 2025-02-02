import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { BookmarkFilledIcon } from "@radix-ui/react-icons"
import { BookmarkIcon, DotIcon } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { TreadingForm } from "./TreadingForm"
import StockChart from "../Home/StockChart"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchCoinDetails } from "@/State/Coin/Action"
import { addItemToWatchlist } from "@/State/Watchlist/Action"

export const StockDetails = () => {
    const coinDetails = useSelector(store => store.coin.coinDetails)

    // const coin = useSelector(state => state.coin);

    const dispatch = useDispatch();

    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchCoinDetails({ coinId: id, jwt: localStorage.getItem("jwt") }))
    }, [id])

    const handleAddToWatchlist = () => {
        dispatch(addItemToWatchlist({ coinId: coinDetails?.id, jwt: localStorage.getItem('jwt') }))
    }

    return (
        <div className="p-5 mt-5">
            <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                    <div>
                        <Avatar>
                            <AvatarImage src={coinDetails?.image.large} />
                        </Avatar>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <p>{coinDetails?.symbol}</p>
                            <DotIcon className="text-gray-400" />
                            <p className="text-gray-400">{coinDetails?.name}</p>
                        </div>
                        <div className="flex items-end gap-2">
                            <p className="text-xl font-bold">${coinDetails?.market_data.current_price.usd}</p>
                            <p className="text-red-600">
                                <span>{coinDetails?.market_data.market_cap_change_24h}</span>
                                <span>({coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>
                            </p>
                        </div>
                    </div>

                </div>

                <div className="flex items-center gap-4">
                    <Button onClick={handleAddToWatchlist}>
                        {true ? <BookmarkFilledIcon className="h-6 w-6" /> :
                            <BookmarkIcon className="h-6 w-6" />}
                    </Button>

                    <Dialog>
                        <DialogTrigger>
                            <Button size="lg">Tread</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>How much do you want to spend?</DialogTitle>
                            </DialogHeader>
                            <TreadingForm />
                        </DialogContent>
                    </Dialog>
                </div>


            </div>
            <div className="mt-14">
                <StockChart coinId={id} />

            </div>
        </div>
    )
}
