import React from 'react';

const ItemInfo = props => {
    
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

    return (
        <div className="ItemInfo">
            <div className="ItemInfo-container">
                <div className="ItemInfo-content">
                    <div className="ItemInfo-image">
                        <img src={props.item.photo} alt={props.item.title}/>
                    </div>
                    <div className="ItemInfo-data">
                        <h2>{props.item.title}</h2>
                        <span>
                            {genderIcon(props.item.gender)} - {props.item.gender}
                        </span>
                        <p>{props.item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemInfo;