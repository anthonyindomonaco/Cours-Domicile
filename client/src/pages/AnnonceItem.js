import React, {Component} from 'react';
import './annonce.css';
import MediaControlCard from '../utils/MediaControlCard';
import axios from 'axios';

class AnnonceItem extends Component {
    constructor(props){
        super(props);
        this.state={
            item: props.item,
            client: [],
            auth: this.props.auth,
        }
    }

    componentDidMount(){
    this.getUser();
    }

    getUser(){
        let Token = localStorage.getItem("token")
        let REACT_APP_GET_USER_ANNONCE_DETAILS_URL = process.env.REACT_APP_GET_USER_ANNONCE_DETAILS_URL
        axios.get(REACT_APP_GET_USER_ANNONCE_DETAILS_URL.replace(':ItemId:', this.state.item.id).replace(':token:', Token))
        .then(res => {
            this.setState({client: res.data}), () => {}
        })
        .catch(err => console.log(err));
    }

    render(){
        return (
            <li className="w-100 p-2 m-n2 d-flex flex-column flex-wrap" style={{display: 'inline'}} >
                <MediaControlCard item={this.state.item} client={this.state.client} auth={this.state.auth}/>
            </li>
        )
    }
}
export default AnnonceItem;