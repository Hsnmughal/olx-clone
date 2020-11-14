import React from "react";
import Carousel from "react-bootstrap/Carousel"
import Cardd from './cardTemp';
import Card from 'react-bootstrap/Card';
export default class Carosal extends React.Component {
    render() {
        return (
            <div className="container bg-light llight">
                <Card.Header className="container-fluid bg-light chead" style={{ borderBottom: "none" }}><h3>More On Mobile Phones<span style={{ float: "right" }}><button type="button" class="btn btn-light login"><span className='log'>View More</span></button></span></h3></Card.Header>
                <div>
                    <Carousel style={{ width: "100%" }}>
                        <Carousel.Item interval={500}>
                            <div className="row d-flex justify-content-around justify-content-between">
                                <div className="col-lg-3 col-md-6 col-sm-12 ">
                                    <Cardd datee="oct 06" locationn="clifton, karachi" txtt="Infinix Zero 8 new box pack discounted offer 1 year official warranty" titlee="37,500" 
                                    srcc="https://apollo-singapore.akamaized.net/v1/files/th2upn78za9j1-PK/image;s=300x600;q=60" />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 ">
                                    <Cardd datee="oct 08" locationn="clifton, karachi" txtt="Iphone 7+ with box and orignal accessories." titlee="52,000" 
                                    srcc="https://apollo-singapore.akamaized.net/v1/files/j48ioqevbje81-PK/image;s=300x600;q=60" />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 ">
                                    <Cardd datee="Today" locationn="Shah Faisal Town, Karachi, Sindh" txtt="Iphone X jv" titlee="80,000" 
                                    srcc="https://apollo-singapore.akamaized.net/v1/files/qml81l3n8lcf3-PK/image;s=1080x1080" />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 ">
                                    <Cardd datee="5 days ago" locationn="Saddar, Karachi, Sindh" txtt="iPhone 11 pro MAX 64gb Dual Sim silver colour" titlee="180,000" 
                                    srcc="https://apollo-singapore.akamaized.net/v1/files/9v66lya55z3s1-PK/image;s=300x600;q=60" />
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <div className="row d-flex justify-content-around">
                                <div className="col-lg-3 col-md-6 col-sm-12 ">
                                    <Cardd datee="Today" locationn="Others, Rawalpindi, Punjab" txtt="Iphone 12 pro 256GB non active" titlee="245,000" 
                                    srcc="https://apollo-singapore.akamaized.net/v1/files/y6txyg3mw9r21-PK/image;s=300x600;q=60" />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 ">
                                    <Cardd datee="Today" locationn="North Nazimabad, Karachi, Sindh" txtt="Iphone 11 pro max" titlee="150,000" 
                                    srcc="https://apollo-singapore.akamaized.net/v1/files/ywnakr730q921-PK/image;s=300x600;q=60" />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 ">
                                    <Cardd datee="Today" locationn="Gujrat, Punjab, Pakistan" txtt="Realme 5 Pro with Box" titlee="24,000" 
                                    srcc="https://apollo-singapore.akamaized.net/v1/files/jjlsldikxixq-PK/image;s=300x600;q=60" />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 ">
                                    <Cardd datee="Today" locationn="Khanna Pul, Rawalpindi, Punjab" txtt="Realme XT 8GB / 128 GB in Mint Condition Just like brand new" titlee="41,000" 
                                    srcc="https://apollo-singapore.akamaized.net/v1/files/vdkr5agkqwff3-PK/image;s=300x600;q=60" />
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row d-flex justify-content-around">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <Cardd datee="Oct 09" locationn="Fazal Town, Rawalpindi, Punjab" txtt="Realme 6pro" titlee="49,000" 
                                    srcc="https://apollo-singapore.akamaized.net/v1/files/t08oqnz94y9h2-PK/image;s=1080x1080" />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <Cardd datee="oct 04" locationn="nazimabad, karachi" txtt="samsung note 3 only mobile phone." titlee="9,000" 
                                    srcc="https://apollo-singapore.akamaized.net/v1/files/h2yixvnfmo4i2-PK/image;s=300x600;q=60" />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <Cardd datee="oct 24" locationn="Jacob Lines, karachi" txtt="Xiaomi Poco X3 Black." titlee="39,000" 
                                    srcc="https://apollo-singapore.akamaized.net/v1/files/lxm40icgdxuz1-PK/image;s=300x600;q=60" />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <Cardd datee="oct 28" locationn="Fb area, karachi" txtt="Iphone x 10/10 64gb." titlee="55,000" 
                                    srcc="https://apollo-singapore.akamaized.net/v1/files/7mg9e7wnv77s-PK/image;s=300x600;q=60" />
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div >
            </div >
        );
    }
}