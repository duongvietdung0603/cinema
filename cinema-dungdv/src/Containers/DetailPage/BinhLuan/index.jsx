import React from 'react';
import { Comment, Tooltip, Avatar } from 'antd';

function BinhLuan({ list }) {
    return (
        <>
            {
                list.map(element => (
                    <Comment
                        author={<h3>{element.user.username}</h3>}
                        avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
                        }
                        content={
                            <p>
                                {element.noiDung}
                            </p>
                        }
                        datetime={
                            <Tooltip >
                                <span>{element.ngayNhanXet}</span>
                            </Tooltip>
                        }
                    />
                ))

            }

        </>
    );
}

export default BinhLuan;