import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cardd from './cardTemp';
import HiddenCards from './hiddenCards';

export default class cardds extends React.Component {
    constructor() {
        super()
        this.state = {
            hidden: <div></div>
        }
    }
    visible = () => {
        this.setState({
            hidden: <HiddenCards className="hidden"/>
        })
    }
    invisible = () => {
        this.setState({
            hidden: <div></div>
        })
    }
    render() {
        return (
            <div className="container">
                <header><h3>Fresh recommendations</h3></header>
                <div className="row d-flex justify-content-around">
                    <div className="cardDiv col-lg-3 col-md-6 col-sm-12 ">
                        <Cardd datee="Today" locationn="sialkot, punjab" txtt="Nissan Pino" titlee="186,000"
                            srcc="https://apollo-singapore.akamaized.net/v1/files/4ccflaqsbx6a2-PK/image;s=300x600;q=60" />
                    </div>
                    <div className="cardDiv col-lg-3 col-md-6 col-sm-12 ">
                        <Cardd datee="Oct 20" locationn="Johar Town, Lahore, Punjab" txtt="Branded Elliptical cross trainers refurbished" titlee="150,000"
                            srcc="https://apollo-singapore.akamaized.net/v1/files/3rxrur3t9pps3-PK/image;s=300x600;q=60" />
                    </div>
                    <div className="cardDiv col-lg-3 col-md-6 col-sm-12 ">
                        <Cardd datee="oct 21" locationn="Rasool Park, Lahore, Punjab" txtt="Sony cyber-shot DSC W800" titlee="13,500"
                            srcc="https://apollo-singapore.akamaized.net/v1/files/f3tbmij1m18v-PK/image;s=300x600;q=60" />
                    </div>
                    <div className="cardDiv col-lg-3 col-md-6 col-sm-12 ">
                        <Cardd datee="oct 01" locationn="Gulberg 3, Lahore, Punjab" txtt="Suzuki Alto 2020 asan mahana iqsat py hasil kren markup sirf 3% MGi sy" titlee="240,000 - 7 Years"
                            srcc="https://apollo-singapore.akamaized.net/v1/files/ytn6cymzj6he-PK/image;s=300x600;q=60" />
                    </div>
                    <div className="cardDiv col-lg-3 col-md-6 col-sm-12 ">
                        <Cardd datee="Oct 07" locationn="McLeod Road, Lahore, Punjab" txtt="400cc Z 1000cc ki replica" titlee="680,000"
                            srcc="https://apollo-singapore.akamaized.net/v1/files/dgby47ea5kbb2-PK/image;s=300x600;q=60" />
                    </div>
                    <div className="cardDiv col-lg-3 col-md-6 col-sm-12 ">
                        <Card style={{ width: '18rem' }} className="card cardRedirector">
                            <p className="crHeading">
                                Want to see your Stuff here?
                            </p>
                            <div className="crBody">
                                Make some extra cash by selling things in your community. Go on, it's quick and easy.
                            </div>
                            <Button variant="outline-light" size="lg" className="crBtn" block>
                                Start Selling
                            </Button>
                        </Card>
                    </div>
                    <div className="cardDiv col-lg-3 col-md-6 col-sm-12 ">
                        <Cardd datee="Yesterday" locationn="Gulraiz Housing Scheme, Rawalpindi, Punjab" txtt="1Kanal House Excellent Architecture For Sale Gulraiz Housing Scheme" titlee="38,500,000"
                            srcc="https://apollo-singapore.akamaized.net/v1/files/wuv1mffphpcz1-PK/image;s=300x600;q=60" />
                    </div>
                    <div className="cardDiv col-lg-3 col-md-6 col-sm-12 ">
                        <Cardd datee="oct 30" locationn="Sialkot, Punjab, Pakistan" txtt="Samsung Note10+ Aura Glow 10/10 Condition PTA Approved" titlee="149,999"
                            srcc="https://apollo-singapore.akamaized.net/v1/files/0v7gohgoto5b-PK/image;s=300x600;q=60" />
                    </div>
                    {this.state.hidden}
                </div>
                <div className=" lmDiv d-flex justify-content-center">
                    <Button size="lg" className="loadMore" onClick={this.visible} onDoubleClick={this.invisible}>
                        Load More/Load Less
                    </Button>
                </div>
            </div>
        );
    }
}
