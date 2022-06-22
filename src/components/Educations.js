import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import certificate from "./../images/certificate.jpg";
import { useState } from 'react';
import "./Educations.css"




export default function Educations() {
    const [imageClicked, setImageClicked] = useState({
        //   first: false,
        //   second: false,
        certificate: false
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
                                <th>Certificates</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SSC</td>
                                <td>Mar 2016</td>
                                <td>
                                    <button onClick={() => onClickHandler("certificate")} className="btn blue lighten-2">
                                        View
                                    </button>

                                </td>
                            </tr>
                            <tr>
                                <td>HSC</td>
                                <td>Mar 2018</td>
                                <td>
                                    <Link to='/details' className='btn blue lighten-2'>
                                        View
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>B.sc Food Science and Technology</td>
                                <td>Jun 2018 - May 2021</td>
                                <td>
                                    <Link to='/details' className='btn blue lighten-2'>
                                        View
                                    </Link>
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
                {imageClicked.certificate && <img className="image" src={certificate} alt="certificate" />}
                {/* {imageClicked.first && <img src={img6} alt="first" />}
        {imageClicked.second && <img src={img7} alt="second" />} */}
            </div>
        </div>
    );
}
