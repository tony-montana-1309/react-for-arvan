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
        console.log(value);
        const res = filterData.filter(f => f.first_name.includes(value.toUpperCase()))

        setData(res);
        console.log(data)
        if (value === "") {
            setData([])
        }
    }

    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className={style.page}>
            <div className={style.serchbox}>
                <div className={style.oldsearch}>
                    <input className={style.searchinput} type="search" placeholder="search" onInput={e => handleFilter(e.target.value)} />
                </div>
            </div>

            <table className={style.tabal}>
                <tr>
                    <th>number-id</th>
                    <th>player</th>
                </tr>

                <tr>
                    <td>
                        <div>
                            {data.map((d, i) => (
                                <div key={i}>
                                    <div className={style.intabel}>
                                        <div className={style.idstyle}>
                                            {d.id}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </td>

                    <td>
                        <div >
                            {data.map((d, i) => (
                                <div key={i} className={style.data}>
                                    <div className={style.intabel}>
                                        {d.first_name}
                                        {d.last_name}
                                        <div>&nbsp;of&nbsp;the&nbsp;</div>
                                        {d.team.name}
                                        <div>&nbsp;team</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </td>


                </tr>

            </table>
        </div>
    );
}

export default Searchbox;