import React from 'react';
import { NavLink } from 'react-router-dom';
import { getPages } from './../service';

export const TopNav = () => {
    const [pages, setPages] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const results = await getPages();
    
            setPages(results.pages);
        }

        fetchData();
    }, []);

    return (
        <header className="header_main_area">
            <div className="header_main_slider_area">
                <div className="item">
                    <img src="http://placehold.it/1600x1020" alt=""></img>
                    <div className="slider_text">
                        <h1>12 round boxing workout</h1>
                        <p>You will burn more calories up to 1,000 per hour</p>
                    </div>
                </div>        
            </div>
            <div className="main-menu-are">
                <div className="container menu_container">
                    <div className="row">
                        <div className="logo">
                            <img src="../img/Eyoke-logo.png" alt=""></img>
                        </div>
                        <button type="button" className="navbar-toggle collapsed responsive_button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse main_menu" id="bs-example-navbar-collapse-1">
                <div className="menu-1">
                    <ul className='nav'>
                        {pages.map(page => (
                            <li key={page.id} className='nav-item'>
                                <NavLink activeclass='active' className='nav-link' to={`/pages/${page.slug}`}>{page.title}</NavLink>
                            </li>
                        ))}
                        <li><a href="../"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="../"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="../"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="../#"><i className="fa fa-pinterest"></i></a></li>
                    </ul>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </header>
    )
};