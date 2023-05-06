import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import './ItemCard.css';

function ItemCard(props) {
    const { id, image, name, premiered, rating, summary } = props.show;

    if (image == null) return null;
    return (
        <Link to={`/show/${id}`}>
            <div className='show' id={'show' + id}>
                <img className='show_image' src={image?.medium} alt={name} />
                <div className='show_overlay'>
                    <div className='show_title'>{name}</div>
                    <div className='show_runtime'>
                        {premiered ?? "N/A"}
                        <span className='show_rating'>{rating.average ?? "N/A"}&nbsp;<FaStar /></span>
                    </div>
                    <div className='show_desc' dangerouslySetInnerHTML={{ __html: summary?.slice(0, 118) + "..." ?? "" }}></div>
                </div>
            </div>
        </Link>
    );
}

export default ItemCard;