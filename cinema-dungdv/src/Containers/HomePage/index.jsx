import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import Banner from './views/Banner/index';
import LichChieu from './views/LichChieu';
import Phim from './views/Phim/index';
import TinTuc from './views/TinTuc/index';

function HomePage() {
    const [list_banner, setList_banner] = useState([
        {
            id: 1,
            img: "https://www.elle.vn/wp-content/uploads/2020/02/09/389446/when-the-weather-is-fine-JTBC-poster.jpg",
            name: "Siêu anh hùng"
        },
        {
            id: 2,
            img: "https://tienghancoban.edu.vn/images/2018/08/09/hoc-tieng-han-qua-phim-hieu-qua-2.jpg",
            name: "Cuộc chiếu siêu anh hùng"
        },
        {
            id: 3,
            img: "https://i.imgur.com/PWBXyM3.jpg",
            name: "Siêu anh hùng"
        },
        {
            id: 4,
            img: "https://static.gamehub.vn/img/files/2017/04/17/Gamehubvn-xep-hang-10-sieu-anh-hung-my-noi-tieng-nhat-lich-su-comic-0.jpg",
            name: "Cuộc chiếu siêu anh hùng"
        },
        {
            id: 5,
            img: "https://i.imgur.com/PWBXyM3.jpg",
            name: "Siêu anh hùng"
        },
        {
            id: 6,
            img: "https://static.gamehub.vn/img/files/2017/04/17/Gamehubvn-xep-hang-10-sieu-anh-hung-my-noi-tieng-nhat-lich-su-comic-0.jpg",
            name: "Cuộc chiếu siêu anh hùng"
        }
    ])

    function propsByPhim(value) {
        console.log("values", value);

    }

    return (
        <div className="HomePage">
            <Banner list_banner={list_banner} />
            <Phim />
            <TinTuc list_phim={list_banner} truyenProps={propsByPhim} />
        </div>
    );
}

export default HomePage;