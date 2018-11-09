import React, { Component } from 'react';


const prices = ['$', '$$', '$$$', '$$$$'];

export default class Categories extends Component {
  render() {
    const { place } = this.props;

    return (
       <div>
        {place.price &&
          <span class="badge badge-dark">{prices[ place.price.tier -1 ]}</span>
        }
        { place.categories && place.categories.map( (category, i) =>
 
          <p className='badge badge-info'>{category.shortName}</p>

        )}
      </div>
    );
  }
}