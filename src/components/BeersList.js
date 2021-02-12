import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class BeersList extends React.Component {

    state = {
        beers: [],

    }

    componentDidMount = async () => {
        try {
            const response = await axios.get(
                `https://ih-beers-api2.herokuapp.com/beers`  
            );
            this.setState({beers: [...response.data]});
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div>
            {this.state.beers.map((beer) => {
                return (
                    <div key={beer._id}>
                        <Link to={`/beers/${beer._id}`}>
                            <img src={beer.image_url} alt='beer'/>
                            <strong>{beer.name}</strong>

                        </Link>

                        <p>
                            {beer.tagline}
                        </p>
                        <p>
                            Created by: {beer.contributed_by}
                        </p>
                    </div>
                )
            })}
                
            </div>
        )
    }
}

export default BeersList;