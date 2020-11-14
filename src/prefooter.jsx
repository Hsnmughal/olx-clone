import React from 'react';

export default function PreFooter() {
    return (
        <div className="container-fluid" style={{ backgroundColor: "rgba(0,47,52,.03)"}}>
                <div className="row" style={{padding : "0px 2em 0px 2em"}}>
                    <div className="fDiv col-lg-3 col-md-3 col-sm-4">
                        <img src="https://statics.olx.com.pk/external/base/img/phone-app.webp" alt="" />
                    </div>
                    <div className="sDiv col-lg-5 col-md-5 col-sm-12">
                        <div style={{ margin: "2vw 0vw 0vh 8vw" }}>
                            <h2 style={{ fontWeight: 700, color: "#002f34", lineHeight: "40px" }}>
                                TRY THE OLX APP
                            </h2>
                            <br/>
                            <h5>
                                Buy, sell and find just about anything using the app on your mobile.
                            </h5>
                        </div>
                    </div>
                    <div className="tDiv col-lg-4 col-md-4 col-sm-12" style={{display : "flex"}}>
                        <div className="tDivd"></div>
                        <div style={{ margin: "5vw 4vw 0em 4vw" }}>
                            <h6 style={{fontWeight: 700, lineHeight : "20px"}}>
                                GET YOUR APP TODAY
                            </h6>
                            <div style={{display : "flex", marginTop : "20px", marginLeft : "-3px"}}>
                                <a href="#" className="svgBtn">
                                    <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp" style={{width: "128px", height: "40px"}} />
                                </a>
                                <a href="#" className="svgBtn">
                                    <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp" style={{width: "128px", height: "40px"}} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}