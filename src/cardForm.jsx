import React from 'react';
import Button from 'react-bootstrap/Button';
import { firebaseApp } from './firebase';
import Nav from 'react-bootstrap/Nav';

export default class CardForm extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         // image: '',
    //         // file: ''
    //         // price: "",
    //         // product : "",
    //     }
    // }
    // handleText = e => {
    //     console.log(e.target.value)
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //         date: today.toLocaleDateString("en-US")
    //     })
    // }
    // handleSubmit=e=>{
    //     this.setState({
    //     })
    //     // fire.database().ref('AdData/').push(this.state)
    //     console.log(this.state)
    // }
    constructor() {
        super()
        this.state = {
            file: "",
            image: ""
        }
    }
    handleImage = e => {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                image: reader.result
            });
        }
        console.log(this.state.image)
        console.log(this.state.file)
        reader.readAsDataURL(file)
    }
    set_val = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit=e=>{
        firebaseApp.database().ref('AdData/').push(this.state)
        // alert("Your Data Has Been Sent to the Server Successfully!")
    }
    render() {
        return (
            <div className="container-fluid CF">
                <div className=" d-flex justify-content-center">
                    <h1>
                        ADD YOUR PRODUCT
                    </h1>
                </div>
                <div className="row m-3 d-flex justify-content-center">
                    <div className="col-md-8 bg-light p-4">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Price</label>
                                <input onChange={(e) => this.set_val(e)} name="price" type="text" class="form-control" required placeholder="Enter price" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Product</label>
                                <input onChange={(e) => this.set_val(e)} name="product" type="text" class="form-control" required placeholder="Enter product" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Place</label>
                                <input onChange={(e) => this.set_val(e)} name="place" type="text" class="form-control" required placeholder="Enter place" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlFile1">Upload Image</label>
                                <input placeholder='imageUrl' className='imageUrl' type='file' onChange={(e) => this.handleImage(e)} name='imageUrl' />                            </div>
                                <Nav.Link href="/"><Button  onClick={()=>this.handleSubmit()} size="lg" className="loadMore btn-lg btn-block">
                                Submit
                            </Button></Nav.Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}