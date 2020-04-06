import React from 'react';

export function SearchAndSortHeader(props) {
    return (
        <div className="row">
            <div className="col-sm-12 col-md-6 form-group">
                <label htmlFor="searchInputName">Search by name:</label>
                <input type="text" className="form-control" id="searchInputName" placeholder="Name" name="filterName"
                    onChange={props.onChange()} style={{ display: 'inline-block', maxWidth: '78%' }}>
                </input>
                <button type="button" id="searchButton" className="btn btn-primary float-right" onClick={props.onClick()}>
                    Search
                </button>
            </div>
            <div className="col-sm-12 col-md-6 form-group">
                <label htmlFor="sortInputId">Sort By Id:</label>
                <select className="form-control" id="sortInputId" name="sort" value={props.sort} onChange={props.onChange()}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </div>
    );
}