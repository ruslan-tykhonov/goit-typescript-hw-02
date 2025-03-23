import axios from "axios";

const API_KEY = "kIXZHFwoY8l0M66SWbGZK836SefcUIcYIq_K3oEBU";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;

axios.defaults.params = {
  orientation: "landscape",
  per_page: 24,
};

// Explicitly define the types for the parameters
export const fetchPhotos = async (param: string, page: number): Promise<[]> => {
  try {
    // Викликаємо axios з дженериком для типізації відповіді
    const response = await axios.get<[]>(
      `https://api.unsplash.com/search/photos?query=${param}&page=${page}&client_id=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};