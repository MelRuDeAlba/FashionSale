import React from 'react';
import ItemInfo from '../components/ItemInfo';

const Item = props => {
    const item = props.location.state;

    return (
        <div className="Item">
            <div className="Item-container">
                <div className="Item-content">
                    <ItemInfo item={item} />
                </div>
            </div>
        </div>
    )
};

export default Item;