const API_KEY = "59eabe110c48b1d6f364ff56c4ba9d12"; 
const API_BASE_URL = "https://api.themoviedb.org/3";

export async function fetchNowPlayingMovies() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    );
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching now-playing movies:', error);
    throw error;
  }
}