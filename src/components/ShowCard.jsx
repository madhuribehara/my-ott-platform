import '../css/ShowCard.css';
import {useMovieContext} from '../contexts/MovieContex'; 

function ShowCard({ movie }) {
    const {isFavourite, addToFavourites, removeFromFavourites } = useMovieContext();
    const favourite = isFavourite(movie.id);
    
    function handleFavorite(e) {
        e.preventDefault();
        if (favourite) {
            removeFromFavourites(movie.id);
        } else {
            addToFavourites(movie);
        }
    }
    
    function handleWatchNow() {
        // Implement the logic for the "Watch Now" button click
        console.log(`Watching ${movie.title}`);
    }
    function handleAddToWatchlist() {
        // Implement the logic for the "Add to Watchlist" button click
        console.log(`Added ${movie.title} to watchlist`);
    }  
    function handleShare() {
        // Implement the logic for the "Share" button click
        console.log(`Sharing ${movie.title}`);
    }
    function handleRate() {
        // Implement the logic for the "Rate" button click
        console.log(`Rating ${movie.title}`);
    }
    function handleDownload() {
        // Implement the logic for the "Download" button click
        console.log(`Downloading ${movie.title}`);
    }
  return (
    <div className="show-card">
        <div className="show-card-content">
            <img className="show-card-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="show-card-details"> 
                <button className= {`favorite-btn${favourite ? " active" : ""}`} onClick={handleFavorite}>♡</button>
                {/* {favourite ? "favorite-button active" : "favorite-button"} */}
            </div>
        </div>
        <div className="show-card-info">
            <h3 className="show-card-title">{movie.title}</h3>
            <p>{movie.release_date.split('-')[0]}</p>
        </div>
    </div>
  );
}

export default ShowCard;