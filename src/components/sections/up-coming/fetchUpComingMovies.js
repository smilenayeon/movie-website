const API_KEY = "59eabe110c48b1d6f364ff56c4ba9d12"; 
const API_BASE_URL = "https://api.themoviedb.org/3";

export async function fetchUpComingMovies() {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Formats the date as "YYYY-MM-DD"
  
    try {
        const response = await fetch(
            `${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}&region=US&with_release_type=3|2&language=en-US&release_date.gte=${formattedDate}&page=1`
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching upcoming movies in US theaters:', error);
        throw error;
    }
}