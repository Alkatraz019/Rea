import React,{ useState, useEffect } from 'react'
require("es6-promise").polyfill();
require("isomorphic-fetch");
export default function Table() {
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Alkatraz019/Rea/gh-pages/ab.json')
        .then((res) => res.json())
        .then((data) => setData(data))
        },[])
    return (
        <>
            <h1 style={{textAlign:"center", margin:'auto'}}>DashBoard</h1>
            
            <table className="table table-bordered border-dark">
                <thead>
                    <th scope="col"> </th>
                    <th scope="col">instrument_token</th>
                    <th scope="col">exchange_token</th>
                    <th scope="col">tradingsymbol</th>
                    <th scope="col">name</th>
                    <th scope="col">last_price</th>
                    <th scope="col">expiry</th>
                    <th scope="col">strike</th>
                    <th scope="col">tick_size</th>
                    <th scope="col">lot_size</th>
                    <th scope="col">instrument_type</th>
                    <th scope="col">segment</th>
                    <th scope="col">exchange</th>
                </thead>
                <tbody>
                    {data.map((d)=>(
                        <tr key={d.s}>
                            <th scope="row">{d.s}</th>
                            <td>{d.instrument_token}</td>
                            <td>{d.exchange_token}</td>
                            <td>{d.tradingsymbol}</td>
                            <td>{d.name}</td>
                            <td style={{backgroundColor:"red"}}>{d.last_price}</td>
                            <td style={{backgroundColor:"yellow"}}>{d.expiry}</td>
                            <td>{d.strike}</td>
                            <td>{d.tick_size}</td>
                            <td>{d.lot_size}</td>
                            <td>{d.instrument_type}</td>
                            <td>{d.segment}</td>
                            <td>{d.exchange}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </>
    )
}
