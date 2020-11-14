import React from 'react';


export default function PostFooter() {
    return (
        <div className="container-fluid" style={{ backgroundColor: "#002f34", color: "whitesmoke", padding: "16px 0"}}>
            <div className="container" style={{lineHeight: "18px", fontSize: "13px" }}>
                <span>
                    <span style={{fontWeight : "700", marginRight : "20px"}}>Other Countries</span><a href="#" className="countries">India</a> - <a href="#" className="countries">South Africa</a> - <a href="#" className="countries">Indonasia</a>
                </span>
                <span style={{float : "right"}}>
                <span style={{fontWeight : "700"}}>Free Classifieds in Pakistan</span> . © 2006-2020 OLX
                </span>
            </div>
        </div>
    );
}