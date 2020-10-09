import { IRestaurantObject, IFilters } from "assets/ts/interfaces";

export const sortByAlphabet = (restaurants: IRestaurantObject[]) =>
  restaurants.sort((a: IRestaurantObject, b: IRestaurantObject) =>
    a.name > b.name ? 1 : -1
  );

export const getGenres = (restaurants: IRestaurantObject[]): string[] =>
  restaurants
    .map((rest: IRestaurantObject) => rest.genre)
    .reduce((acc: string[], genres: string) => {
      const separated = genres.split(",");
      separated.forEach((genre: string) => {
        if (!acc.includes(genre.toLowerCase())) {
          acc = [...acc, genre.toLowerCase()];
        }
      });
      return acc;
    }, []);

export const getAttire = (restaurants: IRestaurantObject[]): string[] =>
  restaurants
    .map((rest: IRestaurantObject) => rest.attire)
    .reduce((acc: string[], attire: string) => {
      if (!acc.includes(attire.toLowerCase())) {
        acc = [...acc, attire.toLowerCase()];
      }
      return acc;
    }, []);

export const checkEmptyFilters = (filters: IFilters): boolean => {
  const { searchFilter, stateFilter, genreFilter, attireFilter } = filters;
  return (
    stateFilter !== "" ||
    genreFilter !== "" ||
    attireFilter !== "" ||
    searchFilter !== ""
  );
};

export const checkMatches = (place: string, filter: string): boolean =>
  place.toLowerCase().includes(filter.toLowerCase());

export const checkState = (place: string, filter: string): boolean =>
  filter !== "" ? place === filter : true;

export const applySearch = (rest: IRestaurantObject, query: string): boolean =>
  checkMatches(rest.name, query) ||
  checkMatches(rest.city, query) ||
  checkMatches(rest.genre, query);

export const applyFilters = (
  rests: IRestaurantObject[],
  filters: IFilters
): IRestaurantObject[] => {
  const { searchFilter, stateFilter, genreFilter, attireFilter } = filters;
  return rests.filter(
    (rest: IRestaurantObject) =>
      applySearch(rest, searchFilter) &&
      checkState(rest.state, stateFilter) &&
      checkMatches(rest.genre, genreFilter) &&
      checkMatches(rest.attire, attireFilter)
  );
};
