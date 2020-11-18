import React from 'react';
import './ThanhToan.scss'

function ThanhToan(props) {
    return (
        <div className="ThanhToan">
            <div className="pricing">
                <input type="radio" name="pricing" id="intro1" />
                <label htmlFor="intro1" className="pricing-check" />
                <div className="pricing-content">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/2/20/Logo_c%E1%BB%A7a_Vietinbank.png" alt="" />
                </div>
            </div>

            <div className="pricing">
                <input type="radio" name="pricing" id="intro2" />
                <label htmlFor="intro2" className="pricing-check" />
                <div className="pricing-content">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Vietcombank_logo.svg/1200px-Vietcombank_logo.svg.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default ThanhToan;