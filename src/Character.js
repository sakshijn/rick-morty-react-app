import React from 'react';

export class Character extends React.Component {
  render() {
    let items = this.props.items;
    let filterSpecies = this.props.filterSpecies;
    let filterGender = this.props.filterGender;
    return (
      <div className="row" >
        {items.map(item => ( filterSpecies.includes(item.species) && filterGender.includes(item.gender) ?(
          <div className="card text-white bg-dark col-6 col-md-3 p-sm-1" style={{ maxWidth: '18rem' }} key={item.name}>
            <img src={item.image} className="card-img-top" alt={item.name}></img>
            <div className="card-header text-uppercase">{item.name}
              <p>id: {item.id}</p>
            </div>
            <div className="card-body">
              <div className="card-text row row-cols-2">
                <div className="col text-uppercase">
                  Status
                      </div>
                <div className="col text-right">{item.status}</div>
                <div className="col text-uppercase">
                  Species
                      </div>
                <div className="col text-right">{item.species}</div>
                <div className="col text-uppercase">
                  Gender
                      </div>
                <div className="col text-right">{item.gender}</div>
                <div className="col text-uppercase">
                  Origin
                      </div>
                <div className="col text-right">{item.origin.name}</div>
                <div className="col text-uppercase">
                  Last Location
                      </div>
                <div className="col text-right">{item.location.name}</div>
              </div>
            </div>
          </div>)
        :<div key={item.name}></div>))}
      </div>
    );
  };
}
