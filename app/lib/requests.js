const API_URL = 'https://api.themoviedb.org/3/';


export async function apiFetch(endpoint, params) {
    try {
        const url = new URL(`${API_URL}${endpoint}`);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[ key ]));
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                Accept: 'application/json'
            }
        });
        const data = await response.json();
    
        return data;

    } catch (error) {
        return error
    }
}