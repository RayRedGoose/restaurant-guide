export interface IRestaurantObject {
  id: string,
  name: string,
  address1: string,
  city: string,
  state: string,
  zip: string,
  lat: string,
  long: string,
  telephone: string,
  tags: string,
  website: string,
  genre: string,
  hours: string,
  attire: string,
};


// ACTION CREATORS

export interface IActionObject {
  type: string,
  [key: string]: any
}

export interface IAddRestaurantAction {
  type: 'ADD_RESTAURANTS',
  restaurants: IRestaurantObject[]
};
