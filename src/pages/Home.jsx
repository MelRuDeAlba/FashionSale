import React from 'react';
import useGetItems from '../hooks/';
import Item from '../components/Item';
import { Link } from 'react-router-dom';

const Home = () => {
    
    const items = useGetItems();

    return (
        <div className="Home">
            <div className="Home-container">
                <div className="Home-content">
                    <div className="Home-items">
                       {items.map((item, index) => 
                            <Link to={{
                                pathname: `/clothes/${index}-${item.title}`,
                                state: {...item}
                            }} >
                                <Item item={item} key={`item-${index}`} />
                            </Link>
                       )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;