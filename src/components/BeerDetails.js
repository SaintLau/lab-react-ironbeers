import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

class BeerDetails extends React.Component {
    state = {
        image_url: '',
        name: '',
        tagline: '',
        first_brewed: '',
        attenuation_level: '',
        description: '',
        contributed_by: ''
    }


getBeerDetail = () => {
    const beerId = this.props.match.params.id;
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
    .then((response) => {
        this.setState({
            image_url: response.data.image_url,
            name: response.data.name,
            tagline: response.data.tagline, 
            first_brewed: response.data.first_brewed,
            attenuation_level: response.data.attenuation_level,
            description: response.data.description,
            contributed_by: response.data.contributed_by
        })
    })
    }

    componentDidMount() {
       
        this.getBeerDetail();
    }


    render() {
        const { image_url, name, tagline, first_brewed, description, attenuation_level, contributed_by} = this.state;
        return(
            <div>
                    <Header />
                <div>
                    <img alt="beer" src={image_url} />
                <div>
                    {name}
                    {tagline}
                    {first_brewed}
                    {description}
                    {attenuation_level}
                    {contributed_by}
                </div>
                </div>
            </div>
        
        
        )
    }
}


export default BeerDetails;