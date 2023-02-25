import React, { useEffect, useState } from "react"
import { Card } from "./Card"
import axios from "axios"

function filterdata(name, item) {
    return item.filter(el => {
        return el.name.toLowerCase().includes(name.toLowerCase());
    })
}
export const Main = () => {
    const [item, setItem] = useState();
    const [allItem, setAllItem] = useState();
    const [names, setNames] = useState();
    
    useEffect(() => {
        fetch();
    }, [])

    const fetch = async () => {
        const res = await axios.get("https://api.disneyapi.dev/characters")
        setItem(res.data.data);
        setAllItem(res.data.data);
    }

    return (
        <>
            <div className="search-bar">
                <img className="logo" src="./Images/logo.png" alt="logo" />
                <input type="search" className="search"
                    placeholder='Search Here'
                    value={names}
                    onChange={e => {setNames(e.target.value)
                    setItem(filterdata(e.target.value,allItem))}
                    } />
            </div>

            <div className="content">
                {
                    (!item) ? <p>Not found</p> : <Card data={item} />
                }

            </div>
        </>
    )
}