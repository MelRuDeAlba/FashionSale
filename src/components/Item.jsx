import React from 'react';
import moment from 'moment';

const Item = props => {

    const genderIcon = (gender) => {
        switch(gender) {
            case 'girl': case 'boy': 
                return (<i className="fas fa-child"></i>);
            case 'women':
                return (<i className="fas fa-female"></i>);
            case 'men':
                return(<i className="fas fa-male"></i>);
            default:
                return(<i className="fas fa-heart"></i>);
    
        }
    }

    const date = moment(props.item.date, 'YYYYMMDD').fromNow();

    return (
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
                    {props.item.sale === "true" ? 'ON SALE': 'DONATE'}
                </div>
            </div>
            <div className="Item-content">
                <div className="Item-head">
                    <h2>{props.item.title}</h2>
                    <span>{props.item.gender}</span>
                    
                </div>
                <p>{props.item.description}</p>
                <div className="Item-date">
                    <i className="fas fa-calendar-alt"></i>
                    <span> - {date}</span>
                </div>
            </div>
        </div>
    )
};

export default Item;
