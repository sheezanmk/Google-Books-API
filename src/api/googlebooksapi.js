export async function searchBooks (query, startIndex = 0, maxResults = 40 ) {
    
    const queryParams = new URLSearchParams();
    queryParams.set("q", query);
    queryParams.set("startIndex", String(startIndex));
    queryParams.set("maxResults", String(maxResults));

    const url = "https://www.googleapis.com/books/v1/volumes?q=" + queryParams.toString();
    

    const response = await fetch(url);

    if(!response.ok) {
        throw new Error ("Request Failed: " + response.status);
    }
    const data = await response.json();

    return data;
}