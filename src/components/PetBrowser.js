import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {

    let petsArray = this.props.pets.map(p => <Pet pet={p} key={p.id} isAdopted={this.props.adoptedPets.includes(p.id) ? true : false} onAdoptPet={this.props.onAdoptPet}/>)

    return (
      <div className="ui cards">
        {petsArray}
      </div>
    );
  }
}

export default PetBrowser;
