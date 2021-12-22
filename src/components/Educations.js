import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


export default function Educations() {
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
                                <th>Certificate</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SSC</td>
                                <td>Mar 2016</td>
                                <td>
                                    <Link to='/details' className='btn blue lighten-2' >
                                        View
                                    </Link>

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
        </div>
    );
}
