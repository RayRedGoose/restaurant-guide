type method = 'GET';

export interface IHeaderObject {
  method: method,
  headers: {
    Authorization: string
  }
}

export const getRestaurants = async () => {
  const apiKey: string = 'Api-Key q3MNxtfep8Gt';
  const endpoint: string = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
  const options: IHeaderObject = {
    method: 'GET',
    headers: {
      Authorization: apiKey
    }
  };

  const res: Response = await fetch(endpoint, options);
  if (!res.ok) {
    throw Error('Failure to get restaurants.');
  }
  return await res.json();
};
