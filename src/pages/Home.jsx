import React from 'react';
import useGetItems from '../hooks/';
import Item from '../components/Item';

const Home = () => {
    
    const items = useGetItems();

    return (
        <div className="Home">
            <div className="Home-container">
                <div className="Home-content">
                    <div className="Home-items">
                       {items.map((item, index) => 
                           <Item item={item} key={`item-${index}`} />
                       )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;