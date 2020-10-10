type methodType = "GET";

export interface IHeaderObject {
  method: methodType;
  headers: {
    Authorization: string;
  };
}

export const getRestaurants = async () => {
  const apiKey: string = process.env.REACT_APP_API_KEY || "";
  const endpoint: string = process.env.REACT_APP_API_ENDPOINT || "";

  const options: IHeaderObject = {
    method: "GET",
    headers: {
      Authorization: apiKey || "",
    },
  };

  const res: Response = await fetch(endpoint, options);

  if (!res.ok) {
    throw Error("Failure to get restaurants.");
  }

  const rests = await res.json();

  return rests;
};
