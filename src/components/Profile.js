import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../images/Photo.jpg';
import 'font-awesome/css/font-awesome.min.css';


export default function Profile() {
    return (
        <div>
            <div className='card'>
                <div className='card-image'>
                    <img className='activator' src={ImgProfile} alt='Pream Kumar' />
                    <Link className='btn-floating halfway-fab waves-effect waves-light red'>
                        <i className='material-icons activator'>more_vert</i>
                    </Link>
                </div>
                <div className='card-content'>
                    <p className="name">Pream Kumar M</p>
                    <span className='card-title activator grey-text text-darken-4'>
                        React Developer
                    </span>
                    <p>Front End Developer</p>
                </div>
                <div className='card-reveal'>
                    <span className='card-title grey-text text-darken-4'>
                        Follow Me
                        <i className='material-icons right'>close</i>
                    </span>
                    <p className='flex-container'>
                        <i className='fab fa-facebook grey-text text-darken-4 social_style'></i>
                        <i className='fab fa-twitter grey-text text-darken-4 social_style'></i>
                        <i className='fab fa-google-plus-g grey-text text-darken-4 social_style'></i>
                        <i className='fab fa-instagram grey-text text-darken-4 social_style'></i>
                        <i className='fab fa-linkedin grey-text text-darken-4 social_style'></i>
                    </p>
                </div>
            </div>
        </div>
    );
}
