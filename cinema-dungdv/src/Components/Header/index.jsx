import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Row, Col, Button, Affix, Breadcrumb } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useLocation
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { call_load_page } from './../../Reducer/actions/Load_Action';


function Header(props) {
    const [menu, setMenu] = useState("");
    const showDrawer = () => {
        setMenu("showMenu");
    };
    const onClose = () => {
        setMenu("hideMenu");
    };


    const [styleHeader, setStyleHeader] = useState({ background: " ", border: " " });

    function onChangeAffix(affixed) {
        console.log(affixed)
        if (affixed == true) {
            setStyleHeader({ background: "linear-gradient(40deg, rgb(252, 35, 93), #4d6497)" })
        } else {
            setStyleHeader({ background: " ", border: " " })
        }
    }

    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const loadPage = useSelector(state => state.Load.loadPage);

    useEffect(() => {
        const fetchProductList = async () => {
            dispatch(call_load_page(1000))
        }
        fetchProductList();
    }, [pathname]);

    return (
        <div className="Header container-fluid" style={{ background: "linear-gradient(40deg, rgb(252, 35, 93), #4d6497)" }}>
            <div className="container ">
                <Row justify="space-between">
                    <Col xs={6} sm={3} lg={3}>
                        <div className="logo">
                            <img src="../Image/Logo/logo_DungDV_2.png" alt="" />
                        </div>
                    </Col>
                    <Col xs={0} sm={18} lg={16} style={{ textAlign: "center" }}  >
                        <Button type="text">
                            <NavLink to="/" >Trang chủ</NavLink >
                        </Button>
                        <Button type="text">
                            <NavLink to="/lich-chieu"> Lịch chiếu</NavLink >
                        </Button>
                        <Button type="text">
                            Tin tức
                        </Button>
                        <Button type="text">
                            Giới thiệu
                        </Button>
                    </Col>
                    <Col xs={0} sm={3} lg={5} style={{ textAlign: "right" }}>

                        <Breadcrumb className="login">
                            <Breadcrumb.Item>
                                <Button type="text">
                                    Đăng nhập
                                    </Button>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Button type="text">
                                    Đăng nhập
                                    </Button>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col xs={12} sm={0} lg={0} style={{ textAlign: "right" }}>
                        <Button onClick={showDrawer} type="text" icon={<MenuOutlined />} className="btn" />
                    </Col>
                </Row>
            </div>

            <div className={`container-fluid menu_mobi ${menu}`}>
                <Row className="container title" justify="space-between">
                    <Col xs={3} />
                    <Col xs={18} style={{ textAlign: "center", fontSize: "25px" }}>MENU</Col>
                    <Col xs={3} style={{ textAlign: "right" }}>
                        <Button onClick={onClose} type="text" icon={<CloseOutlined style={{ fontSize: "25px" }} />} className="btn" />
                    </Col>
                </Row>
                <Row className="container  mt-4 button" justify="space-between">
                    <Col xs={24} style={{ textAlign: "center" }} onClick={onClose}>
                        <Button  >Trang chủ</Button>
                    </Col>
                    <Col xs={24} style={{ textAlign: "center" }} onClick={onClose}>
                        <Button  >
                            Phim
                        </Button>
                    </Col>
                    <Col xs={24} style={{ textAlign: "center" }} onClick={onClose}>
                        <Button  >
                            Tin tức
                        </Button>
                    </Col>
                    <Col xs={24} style={{ textAlign: "center" }} onClick={onClose}>
                        <Button  >
                            Giới thiệu
                        </Button>
                    </Col>
                </Row>
                <Row className="login_mobi button" justify="space-between">
                    <Col xs={10} style={{ textAlign: "center" }}>
                        <Button onClick={onClose}>Dương Việt Dũng</Button>
                    </Col>
                    <Col xs={10} style={{ textAlign: "center" }}>
                        <Button onClick={onClose}>Logout</Button>
                    </Col>
                </Row>
            </div>
            {
                loadPage
                &&
                <div className="bell-noti">
                    <div className="loading">
                        <img src="../Image/Logo/logo_DungDV_1.png" alt="" />
                        {/* <div className="line-loading" /> */}
                    </div>
                </div>
            }
        </div >
    );
}

export default Header;

