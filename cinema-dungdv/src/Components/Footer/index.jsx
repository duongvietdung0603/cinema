import React from 'react';
import './Footer.scss';
import { Row, Col, Button } from 'antd';
import { DownloadOutlined, YoutubeOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

function Footer(props) {
    return (
        <div className="Footer">
            <h1>DUNG-DV</h1>
            <div className="khung">
                <Row gutter={[16, 16]} justify="center">
                    <Col xs={3} sm={2} lg={1} style={{ textAlign: "center" }} >
                        <Button className="btn" shape="circle" icon={<DownloadOutlined />} size={"large"} />
                    </Col>
                    <Col xs={3} sm={2} lg={1} style={{ textAlign: "center" }} >
                        <Button className="btn" shape="circle" icon={<YoutubeOutlined />} size={"large"} />
                    </Col>
                    <Col xs={3} sm={2} lg={1} style={{ textAlign: "center" }} >
                        <Button className="btn" shape="circle" icon={<InstagramOutlined />} size={"large"} />
                    </Col>
                    <Col xs={3} sm={2} lg={1} style={{ textAlign: "center" }} >
                        <Button className="btn" shape="circle" icon={<TwitterOutlined />} size={"large"} />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Footer;