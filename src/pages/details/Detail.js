import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { useEffect, useState } from "react";
import ApiService from "../../services/api_service";
import './Detail.css';
import { FaStar } from "react-icons/fa";
import LocalStorageService from "../../services/local_storage";

function Detail() {
    const [show, setShow] = useState(null);
    const [isBooking, setIsBooking] = useState(false);
    const [isBooked, setIsBooked] = useState(false);

    const { id } = useParams();
        
    const initData = async () => {
        const s = await ApiService.show(id);
        setShow(s)
        setIsBooked(await LocalStorageService.checkIfBooked(id))
    }

    useEffect(() => {
        initData();
    }, []);

    const bookShow = async () => {
        if (isBooking) {
            setIsBooked(true);
            await LocalStorageService.setTicketBooking(id);
        }
        setIsBooking(!isBooking)
    }

    const cancelShow = async () => {
        setIsBooked(!isBooked)
        await LocalStorageService.removeTicketBooking(id);
    }


    return (
        <div className="app">
            <Header />
            {
                show == null ? null : (
                    <div className="movie">
                        <div className="movie__intro">
                            <img className="movie__backdrop" src={show.image.original} alt={ show.name }/>
                        </div>
                        <div className="movie__detail">
                            <div className="movie__detailLeft">
                                <div className="movie__posterBox">
                                    <img className="movie__poster" src={show.image.medium} alt={ show.name }/>
                                </div>
                            </div>
                            <div className="movie__detailRight">
                                <div className="movie__detailRightTop">
                                    <div className="movie__name">{show.name}</div>
                                    <div className="movie__tagline">{show.type}</div>
                                    <div className="movie__rating">
                                        {show.rating.average ?? "N/A"} <FaStar />
                                    </div>
                                    <div className="movie__runtime">{(show.averageRuntime ?? "N/A") + " mins"}</div>
                                    <div className="movie__releaseDate">{show.premiered ?? "N/A"}</div>
                                </div>
                                {
                                    isBooking ?
                                        <div className="booking__form">
                                            <h3 className="book_ticket">Book Ticket</h3>
                                            <input placeholder="First Name" required></input>
                                            <input placeholder="Last Name" required></input>
                                            <input placeholder="Age" required></input>
                                        </div> :
                                        <div>
                                            <div className="movie__genres">
                                                {
                                                    show.genres
                                                        ?
                                                        show.genres.map(genre => (
                                                            <><span className="movie__genre" id={genre}>{genre}</span></>
                                                        ))
                                                        :
                                                        ""
                                                }
                                            </div>
                                            <div className="movie__detailRightBottom">
                                                <div className="synopsisText">Summary</div>
                                                <div dangerouslySetInnerHTML={{ __html: show.summary ?? "" }}></div>
                                            </div>
                                        </div>
                                }
                                {
                                    isBooked ? <button className="cancel__btn" onClick={cancelShow}>Cancel Booking</button> : <button className="book__btn" onClick={bookShow}>{isBooked ? "Booked" : `Book ${isBooking ? "Now" : "Show"}`}</button>

                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Detail;
