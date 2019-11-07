import React from 'react';

const genderIcon = (gender) => {
    switch(gender) {
        case 'girl': case 'boy': 
            return (<i className="fas fa-child"></i>);
        case 'women':
            return (<i className="fas fa-female"></i>);
        case 'men':
            return(<i className="fas fa-male"></i>);
        default:
            return(<i class="fas fa-heart"></i>);

    }
}

const Item = props => (
    <div className="Items">
        <div 
            className="Items-cover"
            style={{
                background: `url(${props.item.photo})`
            }}
        >
            <span>
                {genderIcon(props.item.gender)}
            </span>
            <div className="Items-type">
                {props.item.sale ? 'Venta': 'Donación'}
            </div>
        </div>
        <div className="Item-content">
            <div className="Item-head">
                <h2>{props.item.title}</h2>
                <span>{props.item.gender}</span>
                <span>{props.item.date}</span>
            </div>
        </div>
    </div>
);

export default Item;
