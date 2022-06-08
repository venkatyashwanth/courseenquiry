import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Home
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/form">Enquiry Form</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/enquirydetails">Enquiry details</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
