import React, { useEffect, useState } from 'react';
import './Item_2.scss'
import { NavLink } from 'react-router-dom';

import LichChieu_Api from './../../../Api/LichChieu_Api';
import LichChieu from './LichChieu';



function Item_2({ phim, ngayChieu }) {

    const [lich_chieu, setLich_chieu] = useState([])


    useEffect
        (() => {
            const fetchData = async () => {
                LichChieu_Api.phimById(phim.id)
                    .then(res => {
                        setLich_chieu(res.data);
                    }).catch(err => {
                        console.log(err)
                    });
            };

            fetchData();
        }, []);

    return (
        <div className="khung_item_2">
            <div className="khung_anh">
                <img src={phim.poster} alt="" />
            </div>

            <div className="khung_content">
                <h1><NavLink to={`chi-tiet/${phim.id}`}>{phim.name}</NavLink ></h1>
                <div className="khung_lich">
                    <LichChieu lich_chieu={lich_chieu} ngayChieu={ngayChieu} col={8} />
                </div>
            </div>
        </div>
    );
}

export default Item_2;