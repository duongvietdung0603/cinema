import React from 'react';
import { Col, Button } from 'antd';
import { PlayCircleOutlined, EyeOutlined } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";


function Phim_Item({ list_phim }) {

    return (
        <>
            {
                list_phim && list_phim.map(element => (
                    <Col xs={12} sm={8} lg={6} style={{ textAlign: "center" }} className="mb-4" key={element.id}>
                        <div className="card">
                            <div className="card__inner">
                                <div className="khung_anh">
                                    <img src={element.poster} alt={element.name} />
                                </div>
                                <div className="khung_title">
                                    <h3>{element.name}</h3>
                                </div>
                                <div className="khung_button">

                                    <i className=" icon-item ">
                                        <PlayCircleOutlined style={{ fontSize: "30px" }} />
                                    </i>
                                    <i className=" icon-item ">
                                        <NavLink to={`chi-tiet/${element.id}`}><EyeOutlined style={{ fontSize: "30px" }} /></NavLink >
                                    </i>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))
            }
        </>
    );
}

export default Phim_Item;