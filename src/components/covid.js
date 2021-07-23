import { cleanup } from "@testing-library/react";
import React,  { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {

    const [data, setData] = useState([]);


    const getCovidData = async () => {
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }catch(err){
            console.log("error");
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

  return (

    <>
        <section>
            <h1 class="blinker">🔴Live</h1>
            <h2>Covid-19 LiveTracker </h2>
            <ul>
                <li className="card1">
                            <p className="">
                                <span>OUR </span>COUNTRY
                            </p>
                            <p className="">
                                INDIA
                            </p>
                </li>

                <li className="card2">
                            <p className="">
                                <span>TOTAL </span>RECOVERED
                            </p>
                            <p className="">
                                {data.recovered}
                            </p>
                </li>

                <li className="card3">
                            <p className="">
                                <span>TOTAL </span>CONFIRMED
                            </p>
                            <p className="">
                                {data.confirmed}
                            </p>
                </li>

                <li className="card4">
                            <p className="">
                                <span>TOTAL </span>DEATH
                            </p>
                            <p className="">
                                {data.deaths}
                            </p>
                </li>

                <li className="card5">
                            <p className="">
                                <span>TOTAL </span>ACTIVE
                            </p>
                            <p className="">
                                {data.active}
                            </p>
                </li>

                <li className="card6">
                            <p className="">
                                <span>LAST </span>UPDATED
                            </p>
                            <p className="">
                                {data.lastupdatedtime}
                            </p>
                </li>


            </ul>
        </section>
    </>
  );
}

export default Covid;
