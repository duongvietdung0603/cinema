import React, { useEffect, useState } from 'react';
import { Button, Rate } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import './Item_1.scss'
import { NavLink } from 'react-router-dom';

import LichChieu_Api from './../../../Api/LichChieu_Api';
import LichChieu from './LichChieu';

function Item_1({ phim, ngayChieu }) {

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
        <div className="khung_item_1">
            <div className="khung_anh">
                <img src={phim.poster} alt="" />
            </div>

            <div className="khung_content">
                <h1><NavLink to={`chi-tiet/${phim.id}`}>{phim.name}</NavLink ></h1>
                <Rate disabled defaultValue={phim.star} className="rate" />
                <h4>Thời lượng: {phim.thoiLuong}</h4>
                <h4>Quốc gia: {phim.quocGiaSX}</h4>
                <Button className="btn trailer" icon={<PlayCircleOutlined />}>Trailer</Button>

                <div className="khung_lich">
                    <h4>Lịch chiếu: </h4>
                    <LichChieu lich_chieu={lich_chieu} ngayChieu={ngayChieu} col={4} />
                </div>
            </div>
        </div>
    );
}

export default Item_1;