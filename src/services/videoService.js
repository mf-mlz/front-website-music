let apiUrl = import.meta.env.VITE_API_URL_LATEST_VIDEO;

export const fetchVideos = async () => {
  try {   
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};