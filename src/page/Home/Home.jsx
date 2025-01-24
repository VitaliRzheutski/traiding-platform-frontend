import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import AssetTable from './AssetTable';
import StockChart from './StockChart';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { DotIcon } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { get50CoinList, getCoinList } from '@/State/Coin/Action';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"


export default function Home() {

    const { coin } = useSelector(store => store)
    const dispatch = useDispatch()
    const [category, setCategory] = useState("all");

    const handleCategory = (value) => {
        setCategory(value)
    }
    useEffect(() => {
        dispatch(get50CoinList())
    }, [category])

    useEffect(() => {
        dispatch(getCoinList(1))
    }, [])

    return (
        <div className='relative'>
            <div className='lg:flex'>
                <div className='lg:w-[50%] lg:border-r'>
                    <div className='p-3 flex items-center gap-4'>
                        <Button
                            onClick={() => handleCategory("all")}
                            variant={category == "all" ? "default" : 'outline'}
                            className="rounded-full">
                            All
                        </Button>
                        <Button
                            onClick={() => handleCategory("top50")}
                            variant={category == "top50" ? "default" : 'outline'}
                            className="rounded-full">
                            Top 50
                        </Button>
                        <Button
                            onClick={() => handleCategory("topGainers")}
                            variant={category == "topGainers" ? "default" : 'outline'}
                            className="rounded-full">
                            Top Gainers
                        </Button>

                        <Button
                            onClick={() => handleCategory("topLosers")}
                            variant={category == "topLosers" ? "default" : 'outline'}
                            className="rounded-full">
                            Top Losers
                        </Button>

                    </div>
                    <AssetTable coin={category == "all" ? coin.coinList : coin.top50} category={category} />
                    <div>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>

                    </div>
                </div>
                <div className='hidden lg:block lg:w-[50%] p-5'>
                    <StockChart coinId={"ethereum"} />
                    <div className="flex gap-5 items-center">
                        <div>
                            <Avatar >
                                <AvatarImage className="rounded-full w-10 h-10" src={"https://cryptologos.cc/logos/ethereum-eth-logo.png"} />
                            </Avatar>
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <p>ETH</p>
                                <DotIcon className='text-gray-400' />
                                <p className='text-gray-400'>Ethereum</p>
                            </div>
                            <div className='flex items-end gap-2'>
                                <p className='text-x1 font-bold'>
                                    5465
                                </p>
                                <p className='text-red-600'>
                                    <span> -1319049822.578</span>
                                    <span>(-0.29803%)</span>
                                </p>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
