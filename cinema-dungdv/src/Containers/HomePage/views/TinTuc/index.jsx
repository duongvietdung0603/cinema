import React, { useState } from 'react';
import './TinTuc.scss'
import { Row, Col, Button, Card } from 'antd';

const { Meta } = Card;


function TinTuc(props) {
    const { list_phim, truyenProps } = props;
    const [changeStyle, setChangeStyle] = useState({ buuton1: "btn", buuton2: "", buuton3: "" })

    function clickButton1() {
        setChangeStyle({ buuton1: "btn", buuton2: "", buuton3: "" })
        truyenProps(1)
    }
    function clickButton2() {
        setChangeStyle({ buuton1: "", buuton2: "btn", buuton3: "" })
        truyenProps(2)
    }
    function clickButton3() {
        setChangeStyle({ buuton1: "", buuton2: "", buuton3: "btn" })
        truyenProps(2)
    }


    console.log("tin tức");
    return (
        <div className="TinTuc container">
            <Row gutter={[16, 16]}>
                <Col span={24} style={{ textAlign: "center" }} className="button">
                    <Button type="text" className={`${changeStyle.buuton1}`} onClick={clickButton1}>
                        Điện ảnh
                    </Button>
                    <Button type="text" className={`${changeStyle.buuton2}`} onClick={clickButton2}>
                        Review
                    </Button>
                    <Button type="text" className={`${changeStyle.buuton3}`} onClick={clickButton3}>
                        Khuyến mãi
                    </Button>
                </Col>


                <Col xs={24} sm={12} lg={12} >
                    <div className="simple-card">
                        <div className="simple-card-image image_v1">
                            <img src="https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/Duyhna/Android/chup-anh-macro-voi-zenfone3/chup-anh-zenfone3%20(1).jpg" alt="" />
                        </div>
                        <div className="simple-card-content">
                            <h3 className="simple-card-title">Applying for a Design Job</h3>
                            <p className="simple-card-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio cupiditate, eius
                            illo sapiente repellat recusandae quo tempora totam corruptit recusandae quo tempora totam corruptit
                            recusandae quo tempora totam corrupti.</p>
                            <div className="simple-card-line" />
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={12} lg={12} >
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} lg={12}>
                            <div className="simple-card">
                                <div className="simple-card-image">
                                    <img src="https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh-700x466.jpg" alt="" />
                                </div>
                                <div className="simple-card-content">
                                    <h3 className="simple-card-title title_v2">Applying for a Design Job</h3>
                                    <p className="simple-card-desc  desc_v2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio cupiditate, eius
                                    illo sapiente repellat recusandae quo tempora totam corruptit recusandae quo tempora totam corruptit
                                     recusandae quo tempora totam corrupti.</p>
                                    <div className="simple-card-line" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} lg={12}>
                            <div className="simple-card">
                                <div className="simple-card-image">
                                    <img src="https://icdn.dantri.com.vn/thumb_w/640/2017/1-1510967806416.jpg" alt="" />
                                </div>
                                <div className="simple-card-content">
                                    <h3 className="simple-card-title title_v2">Applying for a Design Job</h3>
                                    <p className="simple-card-desc  desc_v2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio cupiditate, eius
                                    illo sapiente repellat recusandae quo tempora totam corruptit recusandae quo tempora totam corruptit
                                     recusandae quo tempora totam corrupti.</p>
                                    <div className="simple-card-line" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} lg={12}>
                            <div className="simple-card">
                                <div className="simple-card-image">
                                    <img src="https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/Duyhna/Android/chup-anh-macro-voi-zenfone3/chup-anh-zenfone3%20(1).jpg" alt="" />
                                </div>
                                <div className="simple-card-content">
                                    <h3 className="simple-card-title title_v2">Applying for a Design Job</h3>
                                    <p className="simple-card-desc  desc_v2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio cupiditate, eius
                                    illo sapiente repellat recusandae quo tempora totam corruptit recusandae quo tempora totam corruptit
                                     recusandae quo tempora totam corrupti.</p>
                                    <div className="simple-card-line" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} lg={12}>
                            <div className="simple-card">
                                <div className="simple-card-image">
                                    <img src="https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/Duyhna/Android/chup-anh-macro-voi-zenfone3/chup-anh-zenfone3%20(1).jpg" alt="" />
                                </div>
                                <div className="simple-card-content">
                                    <h3 className="simple-card-title title_v2">Applying for a Design Job</h3>
                                    <p className="simple-card-desc  desc_v2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio cupiditate, eius
                                    illo sapiente repellat recusandae quo tempora totam corruptit recusandae quo tempora totam corruptit
                                     recusandae quo tempora totam corrupti.</p>
                                    <div className="simple-card-line" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col span={24} style={{ textAlign: "right" }}>
                    <Button className="btn">
                        <i> Get All...</i>
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default TinTuc;