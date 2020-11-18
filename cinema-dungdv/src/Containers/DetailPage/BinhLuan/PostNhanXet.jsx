import React from "react";
import ReactDOM from "react-dom";
import { Form, Input, Button, Select } from "antd";
const { Option } = Select;

class PostNhanXet extends React.Component {
    formRef = React.createRef();

    constructor(props) {
        super(props);
    }

    onFinish = values => {
        this.props.onClick(values.binhluan)
        this.formRef.current.resetFields();

    };


    render() {
        return (
            <Form ref={this.formRef} onFinish={this.onFinish}>
                <Form.Item name="binhluan"
                    rules={[{ required: true, message: 'Không được để trống!' }]}
                >
                    <Input.TextArea
                        placeholder="Thêm bình luận"
                        autoSize={{ minRows: 2, maxRows: 6 }}
                        style={{ background: "#f0f2f5" }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="text" className="btn " htmlType="submit"  >
                        Bình luận
                     </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default PostNhanXet;
