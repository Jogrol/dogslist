import React, {Component} from 'react';



export default class Dogslist extends Component {

    rederDogBreed(breed) {
        return <li key={breed}>{breed}</li>
    }

    render() {

        const { dogBreeds } = this.props;
        return (
            <div className="dogs-list">
                <h1>Dogs List</h1>
                { dogBreeds === null ? 'Loading...' : <ul>
                    {dogBreeds.map(this.rederDogBreed)}
                </ul>}
            </div>
        )
    }
}