import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Hscmarksheet from "./../images/Hscmarksheet.jpg";
import Sslcmarksheet from "./../images/Sslcmarksheet.jpg"
import DegreeCertificate from "./../images/DegreeCertificate.jpg"
import { useState } from 'react';
import "./Educations.css"




export default function Educations() {
    const [imageClicked, setImageClicked] = useState({
        Hscmarksheet: false,
        Sslcmarksheet: false,
        DegreeCertificate: false
    });
    const onClickHandler = (order) => {
        setImageClicked((prevState) => ({
            ...prevState,
            [order]: !prevState[order]
        }));
    };
    return (
        <div>
            <div className='card'>
                <div className='card-content'>
                    <h6>
                        <strong>EDUCATION</strong>
                    </h6>
                    <table className='striped'>
                        <thead>
                            <tr>
                                <th>Education Details</th>
                                <th>Date</th>
                                <th>certificates</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SSC</td>
                                <td>Mar 2016</td>
                                <td>
                                    <button onClick={() => onClickHandler("Sslcmarksheet")} className="btn blue lighten-2">
                                        View
                                    </button>

                                </td>
                            </tr>
                            <tr>
                                <td>HSC</td>
                                <td>Mar 2018</td>
                                <td>
                                <button onClick={() => onClickHandler("Hscmarksheet")} className="btn blue lighten-2">
                                        View
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>B.sc Food Science and Technology</td>
                                <td>Jun 2018 - May 2021</td>
                                <td>
                                <button onClick={() => onClickHandler("DegreeCertificate")} className="btn blue lighten-2">
                                        View
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Other</td>
                                <td>Dec 2021</td>
                                <td>
                                    <Link to='/details' className='btn blue lighten-2'>
                                        View
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                {imageClicked.Hscmarksheet && <img className="image" src={Hscmarksheet} alt="Hscmarksheet" />}
                {imageClicked.Sslcmarksheet && <img className="image" src={Sslcmarksheet} alt="Sslcmarksheet" />}
                {imageClicked.DegreeCertificate && <img className="image" src={DegreeCertificate} alt="DegreeCertificate" />}
                {/* {imageClicked.first && <img src={img6} alt="first" />}
        {imageClicked.second && <img src={img7} alt="second" />} */}
            </div>
        </div>
    );
}
