import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default class Header2 extends React.Component{
    render() {
        return (
            <div className="header2">
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto container">
                            <NavDropdown title="ALL CATEGORIES" id="collasible-nav-dropdown ndrop">
                                <div style={{ width: "100%", width: "fit-content" }} className="drpd container d-flex align-content-stretch flex-wrap">
                                    <table className="row">
                                        <tr style={{ justifyContent: "space-between" }}>
                                            <td className="col-sm-6 col-md-6 col-lg-3" style={{ verticalAlign: "top" }}>
                                                {/* vehicles */}
                                                <NavDropdown.Item href="#action/3.1" className="navh">Vehicles</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.1" className="navdd">Tractors & Boats</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2" className="navdd">Boats</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Other Vehicles</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Rickshaw & Chingchi</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Buses,Vans & Trucks</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Spare Parts</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Car Accessories</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Cars on Installments</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Cars</NavDropdown.Item>
                                                {/* mobiles */}
                                                <br />
                                                <NavDropdown.Item href="#action/3.1" className="navh">Mobiles</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.1" className="navdd">Mobile Phones</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2" className="navdd">Accessories</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Tablets</NavDropdown.Item>
                                                {/* Electronics & Home Appliances */}
                                                <br />
                                                <NavDropdown.Item href="#action/3.1" className="navh">Electronics & Home Appliances</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.1" className="navdd">Fridges & Freezers</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2" className="navdd">AC & Coolers</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Kitchen Appliances</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Generators UPS & Power Solutions</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Other Home Appliances</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Games & Entertainment</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Camera & Accessories</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">TV-Video-Audio</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Computers & Accessories</NavDropdown.Item>
                                                {/* Property For Sale */}
                                                <br />
                                                <NavDropdown.Item href="#action/3.1" className="navh">Property For Sale</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.1" className="navdd">Portions & Floors</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2" className="navdd">Shops-Offices-Commercial Space</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Appartments & Flats</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Houses</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Lands & Plots</NavDropdown.Item>
                                            </td>
                                            <td className="col-sm-6 col-md-6 col-lg-3" style={{ marginLeft: "10px", verticalAlign: "top" }}>
                                                {/* Animals */}
                                                <NavDropdown.Item href="#action/3.1" className="navh">Animals</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.1" className="navdd">Other Animals</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2" className="navdd">Pet Food & Accessories</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Horses</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Livestock</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Dogs</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Cats</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Hens & Aseels</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Birds</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Fish & Aquariums</NavDropdown.Item>
                                                {/* Furniture & Home Decor */}
                                                <br />
                                                <NavDropdown.Item href="#action/3.1" className="navh">Furniture & Home Decor</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.1" className="navdd">Other House Hold Items</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2" className="navdd">Office Furniture</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Curtains & Blinds</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Rugs & Carpet</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Painting & Mirrors</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Garden & Outdoor</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Tables & Dinning</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Home Decoration</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Beds & Wardrobes</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Sofa & Chairs</NavDropdown.Item>
    
                                                {/* Business,Industrial & Agriculture */}
                                                <br />
                                                <NavDropdown.Item href="#action/3.1" className="navh">Business,Industrial & Agriculture</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.1" className="navdd">Medical & Pharma</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2" className="navdd">Other Business & Industry</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Agriculture</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Construction & Heavy Machinery</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Trade & Industrial</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Food & Industrial</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Business For Sale</NavDropdown.Item>
                                                {/* Bikes */}
                                                <br />
                                                <NavDropdown.Item href="#action/3.1" className="navh">Bikes</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.1" className="navdd">ATV & Quads</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2" className="navdd">Bicycles</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Spare Parts</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Motorcycles</NavDropdown.Item>
                                            </td>
                                            <td className="col-sm-6 col-md-6 col-lg-3" style={{ marginLeft: "10px", verticalAlign: "top" }}>
                                                {/* Fashion & Beauty */}
                                                <NavDropdown.Item href="#action/3.1" className="navh">Fashion & Beauty</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.1" className="navdd">Other Fashion</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2" className="navdd">Couture</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Lawn & Pret</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Wedding</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Watches</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Skin & Hair</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Make Up</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Jewellery</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Footwear</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Clothes</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Accessories</NavDropdown.Item>
                                                {/* Property For Rent */}
                                                <br />
                                                <NavDropdown.Item href="#action/3.1" className="navh">Property For Rent</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.1" className="navdd">Land & Plots</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2" className="navdd">Vacation Rentals-Guest Houses</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Roommates & Playing Guests</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Rooms</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Shops-Offices-Commercial Space</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Portions & Floors</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Appartments & Flats</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Houses</NavDropdown.Item>
                                                {/* Jobs */}
                                                <br />
                                                <NavDropdown.Item href="#action/3.1" className="navh">Jobs</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.1" className="navdd">Other Jobs</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2" className="navdd">Part-Time</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Domestic Staff</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Medical</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Manufacturing</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Accounting & Finence</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Human Resources</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Clerical & Administration</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Hotels & Tourism</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">IT & Networking</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Sales</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Customer Service</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Education</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Adertising & RR</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Marketing</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Online</NavDropdown.Item>
                                            </td>
                                            <td className="col-sm-6 col-md-6 col-lg-3" style={{ marginLeft: "10px", verticalAlign: "top" }}>
                                                {/* Services */}
                                                <NavDropdown.Item href="#action/3.1" className="navh">Services</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.1" className="navdd">Farm & Fresh Food</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2" className="navdd">Catering & Restaurant</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Home & Office Repair</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Movers & Packers</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Maids & Domestic Help</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Health & Beauty</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Event Services</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Electronics & Computer Repair</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Other Services</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Web Development</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Car Rental</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Travel & Visa</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Education & Classes</NavDropdown.Item>
                                                {/* Books, Sports & Hobbies */}
                                                <br />
                                                <NavDropdown.Item href="#action/3.1" className="navh">Books, Sports & Hobbies</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.1" className="navdd">Other Hobbies</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2" className="navdd">Gym & Fitness</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Sports Equipments</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Musical Instruments</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Books & Magazines</NavDropdown.Item>
                                                {/* Kids */}
                                                <br />
                                                <NavDropdown.Item href="#action/3.1" className="navh">Kids</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.1" className="navdd">Kids Accessories</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2" className="navdd">Kids Bikes</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Swings & Slides</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Prams & Walkers</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Toys</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3" className="navdd">Kids Furniture</NavDropdown.Item>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </NavDropdown>
                            <Nav.Link href="#" className="navl">Mobile Phones</Nav.Link>
                            <Nav.Link href="#" className="navl">Cars</Nav.Link>
                            <Nav.Link href="#" className="navl">Motorcycles</Nav.Link>
                            <Nav.Link href="#" className="navl">Houses</Nav.Link>
                            <Nav.Link href="#" className="navl">Tv-Video-Audio</Nav.Link>
                            <Nav.Link href="#" className="navl">Tablets</Nav.Link>
                            <Nav.Link href="#" className="navl">Land & Plots</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}