import React from 'react';
import './LichChieu.scss'
import { Tabs, Select, Space } from 'antd';
import TinTuc from './../TinTuc/index';
import PhimItem from './view/PhimItem/index';

const { TabPane } = Tabs;


function LichChieu(props) {
    return (
        <div className="LichChieu">
            <Tabs tabPosition={"left"} style={{ height: 600 }}>
                <TabPane tab="Tp Hà Nội" key="1">
                    <Tabs tabPosition={"left"}  >
                        <TabPane tab="20 Nguyễn Văn Trỗi" key="1">
                            <PhimItem />
                        </TabPane>
                        <TabPane tab="1 Kim Đồng" key="2">
                            Content of Tab 2
                         </TabPane>
                    </Tabs>
                </TabPane>
                <TabPane tab="Tp Đà Nẵng" key="2">
                    <Tabs tabPosition={"left"} >
                        <TabPane tab="Nguyễn Kiệm" key="1">
                            Content of Tab 1
                         </TabPane>
                        <TabPane tab="1 Kim Đồng" key="2">
                            Content of Tab 2
                         </TabPane>
                        <TabPane tab="Bạch Liêu" key="3">
                            Content of Tab 2
                         </TabPane>
                    </Tabs>
                </TabPane>

            </Tabs>
        </div>
    );
}

export default LichChieu;