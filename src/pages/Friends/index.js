import React from "react";
import { Link } from "react-router-dom";

import menuImg from "../../assets/menu.png";
import facebookimg from "../../assets/facebook.png";
import twitterimg from "../../assets/twitter.png";
import instagramimg from "../../assets/instagram.png";
import youinvest from "../../assets/youinvest.png";

import "./styles.css";

export default function Friends() {
    return (
        <>
            <div className="container fluid">
                <nav class="navbar navbar-expand-lg">
                    <Link to="/office">
                        <a class="navbar-brand">
                            <img
                                src={youinvest}
                                className="img-fluid"
                                width="200"
                            />
                        </a>
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <img src={menuImg} class="navbar-toggler-icon" />
                    </button>
                    <div
                        class="collapse navbar-collapse justify-content-sm-start mt-5"
                        id="navbarNav"
                    >
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/office">
                                    <a class="nav-link">
                                    Carteira
                                        <span class="sr-only">(current)</span>
                                    </a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/matrix">
                                    <a class="nav-link">Ranking</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/friends">
                                    <a class="nav-link">Indique Amigos</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/suitabilityresult">
                                    <a class="nav-link">Suitability</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="friends text-center">
                    <h1 className="text-center">
                        Indique Amigos através das redes sociais!
                    </h1>
                    <div className="row">
                        <div className="col">
                            <a href="https://www.facebook.com/" target="_blank">
                                <img src={facebookimg} className="img-fluid" />
                            </a>
                        </div>
                        <div className="col">
                            <a
                                href="https://twitter.com/explore"
                                target="_blank"
                            >
                                <img src={twitterimg} className="img-fluid" />
                            </a>
                        </div>
                        <div className="col">
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                            >
                                <img src={instagramimg} className="img-fluid" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
