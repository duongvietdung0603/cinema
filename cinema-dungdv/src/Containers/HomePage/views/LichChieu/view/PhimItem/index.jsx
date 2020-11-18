import React from 'react';
import './PhimItem.scss'
import { Col, Row, Button, Divider } from 'antd';

function PhimItem(props) {
    return (
        <div className="PhimItem">
            <div className="khung">
                <div className="khung_phim">
                    <Row gutter={20}>
                        <Col span={4}>
                            <div className="khung_phim_anh">
                                <img src="https://sites.google.com/site/kenhtintucvalamdep/_/rsrc/1510743231985/tuyen-tap-nhung-bo-phim-han-quoc-an-khach-moi-nhat-hien-nay/Phim-han-quoc-May-Hoa-Anh-Trang.jpg?height=400&width=311" alt="" />
                            </div>
                        </Col>
                        <Col span={20}>
                            <div className="khung_phim_ten">
                                <h2>Tên Phim Siêu anh hùng</h2>
                                <span>100p</span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="khung_gioChieu">
                    <Row gutter={20}>
                        <Col span={4} className="mb-1">
                            <Button className="btn btn-block">
                                17:00
                             </Button>
                        </Col>
                        <Col span={4} className="mb-1">
                            <Button className="btn btn-block">
                                17:00
                             </Button>
                        </Col>
                        <Col span={4} className="mb-1">
                            <Button className="btn btn-block">
                                17:00
                             </Button>
                        </Col>
                        <Col span={4} className="mb-1">
                            <Button className="btn btn-block">
                                17:00
                             </Button>
                        </Col>
                    </Row>
                </div>
            </div>
            <Divider />
            <div className="khung">
                <div className="khung_phim">
                    <Row gutter={20}>
                        <Col span={4}>
                            <div className="khung_phim_anh">
                                <img src="https://sites.google.com/site/kenhtintucvalamdep/_/rsrc/1510743231985/tuyen-tap-nhung-bo-phim-han-quoc-an-khach-moi-nhat-hien-nay/Phim-han-quoc-May-Hoa-Anh-Trang.jpg?height=400&width=311" alt="" />
                            </div>
                        </Col>
                        <Col span={20}>
                            <div className="khung_phim_ten">
                                <h2>Tên Phim Siêu anh hùng</h2>
                                <span>100p</span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="khung_gioChieu">
                    <Row gutter={20}>
                        <Col span={4} className="mb-1">
                            <Button className="btn btn-block">
                                17:00
                             </Button>
                        </Col>
                        <Col span={4} className="mb-1">
                            <Button className="btn btn-block">
                                17:00
                             </Button>
                        </Col>
                        <Col span={4} className="mb-1">
                            <Button className="btn btn-block">
                                17:00
                             </Button>
                        </Col>
                        <Col span={4} className="mb-1">
                            <Button className="btn btn-block">
                                17:00
                             </Button>
                        </Col>
                    </Row>
                </div>
            </div>
            <Divider />

        </div>
    );
}

export default PhimItem;        