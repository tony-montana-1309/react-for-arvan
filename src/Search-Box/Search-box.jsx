import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import style from "./style.module.css";

function Searchbox() {
    useEffect(() => {
        fetch("http://localhost:8000/data")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFilterData(data);
            })
            .catch(err => console.log(404))

    }, [])

    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const handleFilter = (value) => {
        const res = filterData.filter(f => f.name.toLowerCasse().includes(value))

        setData(res);

        if (value === "") {
            setData([])
        }
    }


    return (
        <div className={style.serchbox}>
            <div className={style.oldsearch}>
                <input className={style.searchinput} type="search" placeholder="search" onChange={e => handleFilter(e.target.value)} />
            </div>

            <div className="table">
                {data.map((d, i) => (
                    <div key={i}>
                        {d.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Searchbox;