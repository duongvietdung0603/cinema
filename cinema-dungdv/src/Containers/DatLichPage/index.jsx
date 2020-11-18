import React from 'react';
import './DatLichPage.scss'
import { Card, Checkbox } from 'antd';
import { Button, Col, Row, Rate, Table, Breadcrumb } from 'antd';
import Item_ghe from './view/Item_ghe';
import { useSelector } from 'react-redux';
import ThanhToan from './view/ThanhToan';


const list_ghe = [
    {
        name: "A1",
        disabled: false,
        danger: false
    },
    {
        name: "A2",
        disabled: false,
        danger: false
    },
    {
        name: "A3",
        disabled: false,
        danger: false
    },
    {
        name: "A4",
        disabled: false,
        danger: false
    },
    {
        name: "A5",
        disabled: false,
        danger: false
    },
    {
        name: "A6",
        disabled: false,
        danger: false
    },
    {
        name: "A7",
        disabled: false,
        danger: false
    },
    {
        name: "A8",
        disabled: false,
        danger: false
    },
    {
        name: "B1",
        disabled: true,
        danger: false
    },
    {
        name: "B2",
        disabled: true,
        danger: false
    },
    {
        name: "B3",
        disabled: false,
        danger: false
    },
    {
        name: "B4",
        disabled: false,
        danger: false
    },
    {
        name: "B5",
        disabled: false,
        danger: false
    },
    {
        name: "B6",
        disabled: false,
        danger: false
    },
    {
        name: "B7",
        disabled: false,
        danger: false
    },
    {
        name: "B8",
        disabled: false,
        danger: false
    }

]
function DatLichPage(props) {

    const list_ghe_chon = useSelector(state => state.DatLich.list_ghe_chon);
    console.log("list_ghe_chon", list_ghe_chon);

    return (
        <div className="DatLichPage">
            <div className="header">
                <div className="khung_anh">
                    <img src="https://www.elle.vn/wp-content/uploads/2020/04/11/397252/truyen-hinh-han-quoc-meow-chang-trai-bi-an.jpg" alt="" />
                </div>
                <div className="background_nen"></div>

                <div className="main">
                    <Row gutter={[16, 16]}>
                        <Col xs={24} lg={18}>
                            <Card type="inner" title="Màn hình" className="text-center">
                                <div className="khung_ghe">
                                    <Row gutter={[20, 20]} justify="space-between">

                                    </Row>
                                    <Row gutter={[20, 20]} justify="space-between">
                                        {
                                            list_ghe.map(element => (
                                                <Col span={3}>
                                                    <Item_ghe name={element.name} disabled={element.disabled} danger={element.danger} />
                                                </Col>
                                            ))
                                        }
                                        {
                                            list_ghe.map(element => (
                                                <Col span={3}>
                                                    <Item_ghe name={element.name} disabled={element.disabled} danger={element.danger} />
                                                </Col>
                                            ))
                                        }
                                        {
                                            list_ghe.map(element => (
                                                <Col span={3}>
                                                    <Item_ghe name={element.name} disabled={element.disabled} danger={element.danger} />
                                                </Col>
                                            ))
                                        }
                                        {
                                            list_ghe.map(element => (
                                                <Col span={3}>
                                                    <Item_ghe name={element.name} disabled={element.disabled} danger={element.danger} />
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={24} lg={6}>
                            <Card type="inner" className="text-left">
                                <h1 className="name">Tên phim</h1>
                                <div >
                                    <Row>
                                        <Col span={8}>
                                            <h3>Vị trí ghế: </h3>
                                        </Col>
                                        <Col span={16}>
                                            <h3>
                                                {
                                                    list_ghe_chon.map(e => (
                                                        <span>{e} - </span >
                                                    ))
                                                }
                                            </h3>

                                        </Col>
                                    </Row>
                                </div>
                                <h3 >Tổng tiền: </h3>
                                <h3 >Hình thức thanh toán: </h3>
                                <ThanhToan />
                                <Button className="btn btn-block">Thanh toán</Button>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>

        </div >
    );
}

export default DatLichPage;