const API_KEY = "59eabe110c48b1d6f364ff56c4ba9d12"; 
const API_BASE_URL = "https://api.themoviedb.org/3";

export async function fetchPopularMovies() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&with_release_type=2&region=US&language=en-US&page=1`
    );
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
}