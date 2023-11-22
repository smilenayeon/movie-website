import axios from "axios";

const API_KEY = "59eabe110c48b1d6f364ff56c4ba9d12";

export const fetchTop10Moives = async()=>{
    try{
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
          );
          return response.data.results.slice(0, 10);
    }catch (error){
            console.error("Error fetching top 10 movies:", error);
            return[];
    }
}