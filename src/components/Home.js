import React, { useState, useEffect } from 'react'

const Home = () => {

    const [dailySales, setDailySales] = useState(0);

    const [monthlySales, setMonthlySales] = useState(0);

    const [dailyPurchase, setDailyPurchase] = useState(0);

    const [monthlyPurchase, setMonthlyPurchase] = useState(0);

    useEffect(() => {
        fetch('https://puzzled-colt-kimono.cyclic.app/api/invoice/todaytotal')
            .then(res => res.json())
            .then(data => {
                setDailySales(data.total);
            })
        fetch('https://puzzled-colt-kimono.cyclic.app/api/purchase/todaytotal')
            .then(res => res.json())
            .then(data => {
                setDailyPurchase(data.data);
            })
        fetch('https://puzzled-colt-kimono.cyclic.app/api/purchase/getpurchaseamountbymonth')
            .then(res => res.json())
            .then(data => {
                setMonthlyPurchase(data.data);
            })
        fetch('https://puzzled-colt-kimono.cyclic.app/api/invoice/getsalesamountbymonth')
            .then(res => res.json())
            .then(data => {
                setMonthlySales(data.data);
            })
    }, [])

    return (
        <div>
            <div className='container' >
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card shadow' style={{ marginTop: '5%', height: '271px' }}>
                            <div className='card-header bg-black text-white'>
                                <h3><center>Monthly sales</center></h3>
                            </div>
                            <div className='card-body d-flex align-items-center justify-content-center'>
                                <h1><center>{monthlySales} ₹</center></h1>
                            </div>
                        </div>
                        <div className='card shadow' style={{ marginTop: '5%', height: '271px' }}>
                            <div className='card-header bg-black text-white'>
                                <h3><center>Daily sales</center></h3>
                            </div>
                            <div className='card-body d-flex align-items-center justify-content-center'>
                                <h1><center>{dailySales} ₹</center></h1>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='card shadow' style={{ marginTop: '5%', height: '271px' }}>
                            <div className='card-header bg-black text-white'>
                                <h3><center>Monthly purchase</center></h3>
                            </div>
                            <div className='card-body d-flex align-items-center justify-content-center'>
                                <h1><center>{monthlyPurchase} ₹</center></h1>
                            </div>
                        </div>
                        <div className='card shadow' style={{ marginTop: '5%', height: '271px' }}>
                            <div className='card-header bg-black text-white'>
                                <h3><center>Daily purchase</center></h3>
                            </div>
                            <div className='card-body d-flex align-items-center justify-content-center'>
                                <h1><center>{dailyPurchase} ₹</center></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
