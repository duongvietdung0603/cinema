import React, { useEffect, useState } from 'react';
import './LichChieuPage.scss'
import { Button, Col, Pagination, DatePicker, Row, Rate } from 'antd';
import { BarsOutlined, AppstoreOutlined } from '@ant-design/icons';
import moment from 'moment';
import Item_1 from './Item/Item_1';
import Item_2 from './Item/Item_2';
import LichChieu_Api from './../../Api/LichChieu_Api';
import Phim_Api from './../../Api/Phim_Api';


function LichChieuPage(props) {


    const dateFormat = 'YYYY-MM-DD';

    const [list_phim, setList_phim] = useState([]);
    const [status_show, setStatus_show] = useState(true);
    const [ngayChieu, setNgayChieu] = useState(0);

    function onChange(date, dateString) {
        setNgayChieu(dateString);
        console.log("dateString", dateString);
    }

    useEffect(() => {
        const fetchData = async () => {
            Phim_Api.phim(0, ngayChieu)
                .then(res => {
                    setList_phim(res.data);
                    console.log("phim", res.data);
                }).catch(err => {
                    console.log(err)
                });
        };

        fetchData();
    }, [ngayChieu]);

    return (
        <div>
            <div className="LichChieuPage container">
                <Row gutter={20} style={{ minHeight: "400px" }}>
                    <Col span={24} className="bo_loc" >
                        <Row gutter={20} justify="space-between">
                            <Col xs={20} sm={20} md={20} lg={20}>
                                <h2>Lịch chiếu ngày: <DatePicker className="ml-2" format={dateFormat} onChange={onChange} /> </h2>
                            </Col>

                            <Col xs={2} sm={2} md={2} lg={2} className="text-right" >
                                {
                                    status_show ?
                                        <Button icon={< AppstoreOutlined />} className="btn" onClick={() => setStatus_show(false)} />
                                        :
                                        <Button icon={< BarsOutlined />} className="btn" onClick={() => setStatus_show(true)} />
                                }
                            </Col>
                        </Row>
                    </Col>

                    {
                        status_show ?
                            <>
                                {
                                    list_phim.map(element => (
                                        <Col key={element.id} xs={24} sm={24} lg={24} style={{ textAlign: "center" }} className="mb-4"  >
                                            <Item_1 phim={element} ngayChieu={ngayChieu} />
                                        </Col>
                                    ))
                                }
                            </>
                            :
                            <>
                                {
                                    list_phim.map(element => (
                                        <Col key={element.id} xs={24} sm={24} lg={8} style={{ textAlign: "center" }} className="mb-4"  >
                                            <Item_2 phim={element} ngayChieu={ngayChieu} />
                                        </Col>
                                    ))
                                }
                            </>
                    }




                    <Col span={24} style={{ textAlign: "center" }}>
                        <Pagination defaultCurrent={1} total={50} />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default LichChieuPage;