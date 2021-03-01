const API_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet(queryString) {
  // this is browser's api fetch which fetch data from remote links or api
  const response = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
    r.json()
  );

  return response;
}
