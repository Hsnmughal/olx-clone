import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import sellbtn from './images/OlxSellButton.png';
import { auth, provider } from './firebase';
export default class Header0 extends React.Component {
    signIn = () => {
        // Do Google Login Here ..
        auth.signInWithPopup(provider)
            .catch((error) => alert(error.message));
    }
    render() {
        return (
            <div className="stickyDiv" sticky="top">
                <Navbar bg="light" expand="lg" className="stickyNavbar">
                    <div className="logo">
                        <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto container-fluid">
                            <div className='location col-sm-12 col-md-12 col-lg-2'>
                                <div className="upper-nav-city-picker">
                                    <div className="city-picker-select-box" style={{ display: "flex", border: "2px solid black", borderRadius: "7px", width: "200px" }}>
                                        <SearchIcon className='sicon' />
                                        <select className="custom-select bg-light" inline="true" style={{ outline: "none" }}>
                                            <option value="0">Pakistan</option>
                                            <option value="1">Karachi</option>
                                            <option value="2">Lahore</option>
                                            <option value="3">Islamabad</option>
                                            <option value="4">Rawalpindi</option>
                                            <option value="5">Multan</option>
                                            <option value="6">Gujrawala</option>
                                        </select>
                                        <ExpandMoreIcon className='sicon' />
                                    </div>
                                </div>
                            </div>
                            <Form inline className='col-sm-12 col-md-12 col-lg-6'>
                                <InputGroup className="mb-3 form">
                                    <FormControl
                                        placeholder="Find Cars, Mobile Phones and more..."
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary" className="btn1"><SearchIcon className="iconn" /></Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form>
                            <button className="btn btn-light login col-sm-12 col-md-12 col-lg-1" data-toggle="modal" data-target="#exampleModal"><span className='log'>Login</span></button>
                            <button className="sell col-sm-12 col-md-12 col-lg-1" data-toggle="modal" data-target="#exampleModal"><img src={sellbtn} width='96px' height='48px'></img></button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div>
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content modalWidth">
                                <div>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <svg width="25px" height="25px" style={{ margin: "10px" }} viewBox="0 0 1024 1024" data-aut-id="icon" fill-rule="evenodd"><path d="M878.336 85.333l-366.336 366.315-366.336-366.315h-60.331v60.331l366.336 366.336-366.336 366.336v60.331h60.331l366.336-366.336 366.336 366.336h60.331v-60.331l-366.315-366.336 366.315-366.336v-60.331z"></path></svg>
                                    </button>
                                </div>
                                <div className="modal-body mbb">
                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner MODALLL">
                                            <div className="carousel-item active" interval={200}>
                                                <div className="modalC">
                                                    <img height="100px" width="100px" src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.webp" alt="..." />
                                                </div>
                                                <div className="modalC">
                                                    <p>Help make OLX safer place to buy and sell</p>
                                                </div>
                                            </div>
                                            <div className="carousel-item " interval={200}>
                                                <div className="modalC">
                                                    <img height="100px" width="100px" src="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.webp" alt="..." />
                                                </div>
                                                <div className="modalC">
                                                    <p>Contact and close deals faster</p>
                                                </div>
                                            </div>
                                            <div className="carousel-item " interval={200}>
                                                <div className="modalC">
                                                    <img height="100px" width="100px" src="https://statics.olx.com.pk/external/base/img/loginEntryPointChat.webp" alt="..." />
                                                </div>
                                                <div className="modalC">
                                                    <p>Save all your favourite items in one place</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" style={{ fill: "blue" }}>
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                    <Button size="lg" className="modalBtns btn-lg btn-block" style={{ padding: "10px 0px 10px" }}>
                                        Continue with Phone
                                </Button>
                                    <Button size="lg" className="modalBtns btn-lg btn-block" style={{ padding: "10px 0px 10px" }}>
                                        <svg style={{ width: "22px", height: "22px", marginBottom: "3px", fill: "#002f34" }} className="modalSvg" viewBox="0 0 1024 1024" fill-rule="evenodd"><path d="M512 85.325c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.648 0-426.667-191.019-426.667-426.667s191.019-426.667 426.667-426.667zM512 150.605c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429s361.429-161.792 361.429-361.429c0-199.595-161.835-361.387-361.429-361.387zM616.789 301.133v57.6h-61.312c-15.403 0-28.8 14.848-28.8 31.616v0 63.147h90.069v53.845h-90.069v215.509h-67.115v-215.509h-78.592v-53.845h78.592v-74.325c0-42.752 34.517-78.037 76.672-78.037v0h80.555z"></path></svg> Continue with Facebook
                                </Button>
                                    <Button onClick={this.signIn} size="lg" className="modalBtns btn-lg btn-block" style={{ padding: "10px 0px 10px" }}>
                                        <svg style={{ width: "22px", height: "22px", marginBottom: "3px", fill: "#002f34" }} className="modalSvg" viewBox="0 0 1024 1024" fill-rule="evenodd"><path class="rui-367TP rui-27W37" d="M511.979 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.605 0-426.667-191.019-426.667-426.667s191.061-426.667 426.667-426.667zM511.979 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429 199.637 0 361.429-161.792 361.429-361.429 0-199.595-161.792-361.387-361.429-361.387zM515.772 325.594c47.061-2.176 91.221 17.92 127.189 45.995-15.403 17.109-31.275 33.621-48.341 49.024-43.221-29.312-104.747-37.717-147.968-3.797-61.867 41.899-64.768 140.971-5.205 186.155 57.856 51.541 167.296 25.941 183.381-52.864-36.309-0.555-72.661 0-108.885-1.152-0.171-21.291-0.213-42.453-0.171-63.659 60.587-0.213 121.259-0.299 181.973 0.171 3.627 49.92-3.157 102.955-34.347 144.256-47.317 65.28-142.379 84.352-216.576 56.32-74.411-27.691-127.232-104.789-120.917-183.424 1.664-96.128 91.861-180.309 189.867-177.024z"></path></svg> Continue with Google
                                </Button>
                                    <Button size="lg" className="modalBtns btn-lg btn-block" style={{ padding: "10px 0px 10px" }}>
                                        Continue with Email
                                </Button>
                                    <p style={{ textAlign: "center", margin: "20px 0 16px", fontSize: "12px" }}>
                                        We won't share your personal details with anyone
                                </p>
                                    <p style={{ textAlign: "center", margin: "20px 0 16px", fontSize: "12px", color: "rgba(0,47,52,.64)" }}>
                                        If you continue, you are accepting <a className="Tos" href="https://help.olx.com.pk/hc/en-us">OLX Terms and Conditions and Privacy Policy</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}