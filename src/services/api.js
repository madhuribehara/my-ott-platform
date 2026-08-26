const API_KEY = "ad961e8cb2d4d96c2e0c22e592466512";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Failed to fetch popular movies");
    }
    const data = await response.json();
    console.log("Popular Movies Data:", data); // Log the entire data object
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const searchMovies = async (query) => {
  const response =  await fetchMovies(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;
};
