import React, { useState } from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { set_ghe } from '../../../../Reducer/actions/DatLich_Action';

function Item_ghe({ name, disabled, danger }) {
    const [danger_button, setDanger] = useState(danger)
    const dispatch = useDispatch();
    const list_ghe_chon = useSelector(state => state.DatLich.list_ghe_chon);

    function chonghe() {
        setDanger(!danger_button);

        dispatch(set_ghe(name))

    }
    return (
        <Button disabled={disabled} type="primary" danger={danger_button} onClick={chonghe}>
            {name}
        </Button>
    );
}

export default Item_ghe;