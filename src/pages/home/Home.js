import { useEffect, useState } from 'react';
import './Home.css';
import ApiService from '../../services/api_service';
import Header from '../../components/header/Header';
import ItemCard from '../../components/item_card/ItemCard';


function Home() {

    const [shows, setShows] = useState([])

    const getShows = async () => {
        const s = await ApiService.shows();
        setShows(s)
    }

    useEffect(() => {
        getShows();
    }, []);

    return (
        <div className="app">
            <Header />
            <div className='expanded'>
                <div className='shows'>
                    {
                        shows.map(s =>  <ItemCard show={s.show}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
