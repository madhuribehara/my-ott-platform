import ShowCard from "../components/ShowCard";
import {getPopularMovies, searchMovies} from "../services/api";
import { useState, useEffect } from "react";
import '../css/Home.css';

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error , setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
            const loadPopularMovies = async () => {
                try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }catch (error) {
                console.error("Error fetching popular movies:", error);
                setError("Failed to fetch popular movies. Please try again later.");
            } finally {
                setLoading(false);
            }
            
        }
        loadPopularMovies();
    }, []);

    // const movies = [
    //     { id: 1, title: 'Mr Khan', description: 'Description of Movie 1' , release_date: '2024'},
    //     { id: 2, title: 'Monk Journeey', description: 'Description of Movie 2' , release_date: '2022'},
    //     { id: 3, title: 'Die Hard Fan', description: 'Description of Movie 3' , release_date: '2020'},
    // ];

const handleSearch = async(event) => {
    event.preventDefault();
    if(!searchQuery.trim()) {
        return;
    }
    if(loading) return; // Prevent multiple searches while loading
    
    setloading(true);
    try{
        const searchResults = await searchMovies(searchQuery);
        setMovies(searchResults);
        setError(null); // Clear any previous errors
    } catch (error) {
        console.error("Error searching movies:", error);
        setError("Failed to search movies. Please try again later.");
    } finally {
        setLoading(false);
    }
    console.log(`Searching for: ${searchTerm}`);
    // Implement the search logic here
  };

return (
    <div className="home">
        <form onSubmit={(e) => e.preventDefault()} className="search-form">
            <input type="text" placeholder="Search for a movie..."  className="search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}
       
        {loading ? (
            <p>Loading movies...</p>
        ) : (
            <div className="movies-grid">
            {movies.map((movie) => (
                movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (  
                <ShowCard
                    key={movie.id}
                    movie={movie}
                />
                )))}
                </div>
        )}
    </div>
  );
}

export default Home;