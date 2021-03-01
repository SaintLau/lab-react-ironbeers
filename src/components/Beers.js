import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Beers extends React.Component {
    state = {
        beers: []
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
            this.setState({
                beers: response.data
            })
        })
    }

    render() {
        const { beers } = this.state;
        return(
            <ul>
                {beers.map((beer) => {
                    return (
                      <li>
                        <Link to={`/${beer._id}`}>
                          {beer.name}
                        </Link>
                      </li>     
                    )
                })}
            </ul>
        )
    }
}

    

export default Beers;