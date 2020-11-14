import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default class Cardd extends React.Component {
    constructor() {
        super()
        this.state = {
            first : <FavoriteBorderIcon className='heart'/>
        }
    }
    change_icon = () => {
        this.setState({
            first : <FavoriteIcon className='heart2'/>
        })
    }
    change_back = () => {
        this.setState({
            first : <FavoriteBorderIcon className='heart'/>
        })
    }
    render() {
        return (
            <Card style={{ width: '18rem' }} className="card">
                <div className="fIcon d-flex justify-content-between">
                    <p className="featured">featured</p>
                    <button className="heartBtn" onClick={this.change_icon} onDoubleClick={this.change_back}>{this.state.first}</button>
                </div>
                <Card.Img variant="top" src={this.props.srcc} style={{ objectFit: "contain", maxWidth: "150px", minWidth: "150px", maxHeight: "150px", margin: "10px auto", minHeight: "150px" }} />
                <Card.Body className="color">
                    <Card.Title>Rs {this.props.titlee}</Card.Title>
                    <Card.Text className="ctxt">
                        {this.props.txtt}
                    </Card.Text>
                    <div className="locationn"><span>{this.props.locationn}</span><span className="date">{this.props.datee}</span></div>
                </Card.Body>
            </Card>
        );
    }
}