type method = 'GET';
type envVar = string | undefined;

export interface IHeaderObject {
  method: method,
  headers: {
    Authorization: string
  }
}

export const getRestaurants = async () => {
  const apiKey: envVar = process.env.REACT_APP_API_KEY;
  const endpoint: string = process.env.REACT_APP_API_ENDPOINT || '';

  const options: IHeaderObject = {
    method: 'GET',
    headers: {
      Authorization: apiKey || ''
    }
  };

  const res: Response = await fetch(endpoint, options);
  if (!res.ok) {
    throw Error('Failure to get restaurants.');
  }
  return await res.json();
};
