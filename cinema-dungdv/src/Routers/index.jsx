import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import HomePage from './../Containers/HomePage/index';
import LichChieuPage from './../Containers/LichChieuPage/index';
import DetailPage from './../Containers/DetailPage/index';
import NotFound from './../Containers/NotFoundPage/index';
import DatLichPage from './../Containers/DatLichPage/index';



function Routers(props) {
    const [check, setCheck] = useState(false);
    return (
        <Switch>
            <Route exact path="/">
                {check ? <HomePage /> : <LichChieuPage />}
            </Route>
            <Route exact path="/lich-chieu">
                <LichChieuPage />
            </Route>
            <Route exact path="/chi-tiet/:id">
                <DetailPage />
            </Route>
            <Route exact path="/chi-tiet">
                <DetailPage />
            </Route>
            <Route exact path="/dat-lich">
                <DatLichPage />
            </Route>
            <Route component={NotFound} />
        </Switch>
    );
}

export default Routers;