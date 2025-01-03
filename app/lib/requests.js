const API_URL = 'https://api.themoviedb.org/3/';

export async function searchEngine(input) {
    try {
        const response = await fetch(`${API_URL}search/multi?query=${input}`,{
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                Accept: 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        return data;
        
    } catch (error) {
        return error
    }
}