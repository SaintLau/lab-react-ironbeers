import React from 'react';
import axios from 'axios';
import Header from './Header';

class NewBeer extends React.Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    }

    handleChange = (event) => { //so we can write on the fields
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        //const {name, tagline, description} = this.state
        //let first_brewed = '2010'
        //let newBeer = this.state
        //we could also create variables with what we want to pass as 2nd argument on the post method

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
        .then(() => {
            this.setState({
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: 0,
                contributed_by: ''
            })
        })
    }

    render() {
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
        return (
            <div>
                <Header />
                <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" onChange={this.handleChange} value={name} />

                        <label>Tagline</label>
                        <input type="text" name="tagline" onChange={this.handleChange} value={tagline} />

                        <label>Description</label>
                        <input type="text" name="description" onChange={this.handleChange} value={description} />

                        <label>First Brewed</label>
                        <input type="text" name="first_brewed" onChange={this.handleChange} value={first_brewed} />

                        <label>Brewers Tips</label>
                        <input type="text" name="brewers_tips" onChange={this.handleChange} value={brewers_tips} />

                        <label>Attenuation Level</label>
                        <input type="number" name="attenuation_level" onChange={this.handleChange} value={attenuation_level} />

                        <label>Contributed By</label>
                        <input type="text" name="contributed_by" onChange={this.handleChange} value={contributed_by} />

                        <button type="submit">ADD NEW</button>

                    </form>
                </div>
            </div>
        )
    }


}

export default NewBeer; 