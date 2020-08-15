import React from 'react';
import { DropdownDivider } from 'react-bootstrap/Dropdown';


export default function Footer() {
    return (
        <footer classNameName="footer bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                    <p className="text-muted small mb-4 mb-lg-0">© HT POOL SOLUTIONS 2020 All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item mr-3">
                        <a href="https://www.facebook.com/407548936768256/posts/407574273432389?sfns=mo">
                            <i class="fab fa-facebook fa-2x fa-fw"></i>
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href="https://www.instagram.com/htpoolsolutions/">
                            <i className="fab fa-instagram fa-2x fa-fw"></i>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}