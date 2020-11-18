import React, { memo } from 'react';
import { Col, Row, Button } from 'antd';
import { NavLink } from 'react-router-dom';


function LichChieu({ lich_chieu, ngayChieu, col }) {
    return (
        <Row gutter={20}>
            {
                lich_chieu && lich_chieu.map((element, index) => {
                    if (element.ngayChieu == ngayChieu) {
                        return (
                            <>
                                {
                                    element.gioChieu.map(e => (
                                        <Col xs={12} lg={col} className="mb-1">
                                            <Button className="btn btn-block">
                                                <NavLink to="/dat-lich" >{e}</NavLink >
                                            </Button>
                                        </Col>
                                    ))
                                }
                            </>

                        )
                    }
                })
            }
        </Row>
    );
}

export default LichChieu;