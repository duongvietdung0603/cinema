import React, { useEffect, useState } from 'react';
import './Phim.scss'
import { Row, Col, Button } from 'antd';
import Phim_Item from './Phim_Item';
import Phim_Item_load from './Phim_Item_load';
import { useDispatch, useSelector } from 'react-redux';
import { call_load_item } from './../../../../Reducer/actions/Load_Action';
import callApi from './../../../../Api/index';
import Phim_Api from './../../../../Api/Phim_Api';


function Phim(props) {
    const dispatch = useDispatch();
    const loadItem = useSelector(state => state.Load.loadItem);

    const [list_phim, setList_phim] = useState([])
    const [changeStyle, setChangeStyle] = useState({ buuton1: "btn", buuton2: "", status: 0 })

    function clickButton1() {
        setChangeStyle({ buuton1: "btn", buuton2: "", status: 0 })
        dispatch(call_load_item(1000))
    }
    function clickButton2() {
        setChangeStyle({ buuton1: "", buuton2: "btn", status: 1 })
        dispatch(call_load_item(1000))
    }

    useEffect(() => {
        const fetchData = async () => {
            Phim_Api.phimByStatus(changeStyle.status)
                .then(res => {
                    console.log(res.data);
                    setList_phim(res.data)
                }).catch(err => {
                    alert(err);
                });
        };

        fetchData();
    }, [changeStyle.status]);

    return (
        <div className="Phim container">
            <Row gutter={20}>
                <Col span={24} style={{ textAlign: "center" }} className="button">
                    <Button type="text" className={`${changeStyle.buuton1}`} onClick={clickButton1}>
                        Đang chiếu
                    </Button>
                    <Button type="text" className={`${changeStyle.buuton2}`} onClick={clickButton2}>
                        Sắp chiếu
                    </Button>
                </Col>
                {
                    loadItem ? <Phim_Item_load /> : <Phim_Item list_phim={list_phim} />
                }

                <Col span={24} style={{ textAlign: "right" }}>
                    <Button className="btn">
                        <i> Get All...</i>
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default Phim;