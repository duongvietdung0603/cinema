import React, { useEffect, useState } from 'react';
import './DetailPage.scss'
import { Button, Col, Row, Rate, Table, Breadcrumb } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useParams
} from "react-router-dom";
import { Tabs } from 'antd';
import BinhLuan from './BinhLuan/index';
import { PlayCircleOutlined } from '@ant-design/icons';
import Phim_Api from './../../Api/Phim_Api';
import LichChieu_Api from './../../Api/LichChieu_Api';
import { useDispatch, useSelector } from 'react-redux';
import { danhgia_nhanxet, pots_nhan_xet } from './../../Reducer/actions/NhanXet_DanhGia_Action';
import PostNhanXet from './BinhLuan/PostNhanXet';
import LichChieu from './LichChieu';

const { TabPane } = Tabs;







function DetailPage() {
    const { id } = useParams();

    const [phim_id, setPhim_id] = useState([])
    const [lich_chieu, setLich_chieu] = useState([])

    const dispatch = useDispatch();
    const list_nhan_xet = useSelector(state => state.NhanXet_DanhGia.list_nhan_xet);

    useEffect(() => {
        const fetchData = async () => {
            Phim_Api.phimById(id)
                .then(res => {
                    setPhim_id(res.data);
                }).catch(err => {
                    console.log(err)
                });

            LichChieu_Api.phimById(id)
                .then(res => {
                    setLich_chieu(res.data);
                }).catch(err => {
                    console.log(err)
                });

            dispatch(danhgia_nhanxet(id))
        };

        fetchData();
    }, []);

    function handleChildClick(component) {
        dispatch(pots_nhan_xet(component, 1, id))
    }
    return (
        <div className="DetailPage">
            <div className="container chi_tiet">

                <Row gutter={20}>
                    <Col span={24}>
                        <div className="history">
                            <Breadcrumb>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <a href="">Lịch chiếu</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>An Application</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </Col>
                    <Col xs={0} sm={12} md={8} lg={10}>
                        <div class="player-loading" style={{
                            backgroundImage: `url(${phim_id.poster})`
                        }}>
                            <div class="player-play">
                                <PlayCircleOutlined style={{ fontSize: "30px" }} />
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={16} lg={14}>
                        <div className="khung_thong_tin">
                            <h1 className="name">{phim_id.name}</h1>
                            <Rate disabled defaultValue={2} className="rate" />
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h4>Thời lượng:  </h4>
                                        </td>
                                        <td>
                                            <h5>{phim_id.thoiLuong}</h5>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Quốc gia:  </h4>
                                        </td>
                                        <td>
                                            <h5>{phim_id.quocGiaSX}</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Năm sx:  </h4>
                                        </td>
                                        <td>
                                            <h5>{phim_id.namSX}</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Đạo diễn:  </h4>
                                        </td>
                                        <td>
                                            <h5>{phim_id.daoDien}</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Diễn viên chính:</h4>
                                        </td>
                                        <td>
                                            <h5>{phim_id.dienVienChinh}</h5>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4>Giới thiệu:</h4>

                            <h5>Giới thiệu: {phim_id.noiDung}</h5>



                        </div>
                    </Col>
                    <Col xs={24} lg={12} className="mt-4" >
                        <div className="khung">
                            <h1>Lịch chiếu</h1>
                            <LichChieu list={lich_chieu} />
                        </div>

                    </Col>
                    <Col xs={24} lg={12} className="mt-4" >
                        <div className="khung">
                            <h1>Bình luận</h1>
                            <PostNhanXet idUser={1} idPhim={id} onClick={handleChildClick} />
                            <BinhLuan list={list_nhan_xet} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div >

    );
}

export default DetailPage;
