import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContex';
import ShowCard from '../components/ShowCard';

function Favorites() {

  const { favourites } = useMovieContext();

  if(favourites)
    return (
      <div className="favorites">
        <h2>My Favorite Movies</h2>
        <div className="movies-grid">
          {favourites.map((movie) => (
            <ShowCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );

  return (
    <div className="favorites-empty" >
      <h2>No Favorites Movies Yet</h2>
      <p>Start adding your movies to your favorite and they will appear here</p>
    </div>
  );
}

export default Favorites;