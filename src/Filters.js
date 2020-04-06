import React from 'react';

export class Filter extends React.Component {
    render() {
        return (
            <div style={{ border: "1px solid", marginTop: '20px', padding: '10px' }}>
                <h4>Species</h4>
                    {this.props.species.map(specie =>
                        (<div className="form-check" key={specie}>
                            <input className="form-check-input" type="checkbox" value={specie} 
                            name="filterSpecies" checked={this.props.filterSpecies.includes(specie)} onChange={e => this.props.onChange(e)}></input>
                                <label className="form-check-label">{specie}</label>
                                </div>
                        ))}
            </div>
        )
    }
}