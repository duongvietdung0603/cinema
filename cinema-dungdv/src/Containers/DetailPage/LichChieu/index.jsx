import React from 'react';
import { Col, Collapse, Row, Button } from 'antd';
import { NavLink } from 'react-router-dom';

const { Panel } = Collapse;

function LichChieu({ list }) {
    return (
        <div>
            <Collapse accordion defaultActiveKey={['0']} ghost>
                {
                    list && list.map((element, index) => (
                        <Panel header={element.ngayChieu} key={index}>
                            <Row gutter={20}>
                                {
                                    element.gioChieu.map(e => (
                                        <Col xs={8} sm={12} md={8} lg={8} className="mb-1">
                                            <Button className="btn btn-block">
                                                <NavLink to="/dat-lich" >{e}</NavLink >
                                            </Button>
                                        </Col>
                                    ))
                                }

                            </Row>
                        </Panel>
                    ))
                }


            </Collapse>
        </div>
    );
}

export default LichChieu;