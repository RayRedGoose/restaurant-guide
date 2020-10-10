import * as utils from "../_utils";
import { IRestaurantObject, IFilters } from "assets/ts/interfaces";
import mockRestaurant, {
  mockRestaurantAdditional,
} from "assets/ts/test/mockRestaurant";
import mockStore from "assets/ts/test/mockStore";

it("should return the array of restaurants sorted alphabetically by name", () => {
  const restaurants: IRestaurantObject[] = [
    mockRestaurant,
    mockRestaurantAdditional,
  ];
  const expected: IRestaurantObject[] = [
    mockRestaurantAdditional,
    mockRestaurant,
  ];
  const result: IRestaurantObject[] = utils.sortByAlphabet(restaurants);

  expect(result).toEqual(expected);
});

it("should return the array of all genres", () => {
  const restaurants: IRestaurantObject[] = [
    mockRestaurant,
    mockRestaurantAdditional,
  ];
  const expected: string[] = [
    "steak",
    "american",
    "contemporary",
    "seafood",
    "cafe",
    "japanese",
    "sushi",
    "asian",
  ];
  const result: string[] = utils.getGenres(restaurants);

  expect(result).toEqual(expected);
});

it("should return the array of all attires", () => {
  const restaurants: IRestaurantObject[] = [
    mockRestaurant,
    mockRestaurantAdditional,
  ];
  const expected: string[] = ["business casual"];
  const result: string[] = utils.getAttire(restaurants);

  expect(result).toEqual(expected);
});

describe("checkEmptyFilters", () => {
  it("should return true if even one of filters is not empty", () => {
    const filters: IFilters = {
      stateFilter: "CO",
      genreFilter: "",
      attireFilter: "",
      searchFilter: "",
    };

    const result: boolean = utils.checkEmptyFilters(filters);

    expect(result).toEqual(true);
  });

  it("should return false if all filters are empty", () => {
    const filters: IFilters = {
      stateFilter: "",
      genreFilter: "",
      attireFilter: "",
      searchFilter: "",
    };

    const result: boolean = utils.checkEmptyFilters(filters);

    expect(result).toEqual(false);
  });
});

describe("checkMatches", () => {
  it("should return true if checking string contains filter string", () => {
    const filter: string = "steak";
    const result: boolean = utils.checkMatches(mockRestaurant.genre, filter);

    expect(result).toEqual(true);
  });

  it("should return false if checking string doesn't contain filter stringy", () => {
    const filter: string = "social";

    const result: boolean = utils.checkMatches(mockRestaurant.genre, filter);

    expect(result).toEqual(false);
  });
});

describe("checkState", () => {
  it("should return true if restaurant state property matchs filter state", () => {
    const result: boolean = utils.checkState(mockRestaurant.state, "MD");

    expect(result).toEqual(true);
  });

  it("should return false if restaurant state property doesn't match filter state", () => {
    const result: boolean = utils.checkState(mockRestaurant.state, "CO");

    expect(result).toEqual(false);
  });
});

describe("applySearch", () => {
  it("should return true if restaurant name matchs query", () => {
    const query: string = "Hickory";
    expect(mockRestaurant.name).toEqual("Old Hickory Steakhouse");
    const result: boolean = utils.applySearch(mockRestaurant, query);

    expect(result).toEqual(true);
  });

  it("should return true if restaurant city matchs query", () => {
    const query: string = "Oxon";
    expect(mockRestaurant.city).toEqual("Oxon Hill");

    const result: boolean = utils.applySearch(mockRestaurant, query);

    expect(result).toEqual(true);
  });

  it("should return true if restaurant genre matchs query", () => {
    const query: string = "american";
    expect(mockRestaurant.genre).toEqual(
      "Steak,American,Contemporary,Seafood,Cafe"
    );

    const result: boolean = utils.applySearch(mockRestaurant, query);

    expect(result).toEqual(true);
  });

  it("should return false if restaurant name or city or genre doesn't match filter state", () => {
    const result: boolean = utils.applySearch(mockRestaurant, "social");

    expect(result).toEqual(false);
  });
});

describe("applyFilters", () => {
  it("should return the filteres array after implementing all filters", () => {
    const filters: IFilters = {
      stateFilter: "MD",
      genreFilter: "cafe",
      attireFilter: "casual",
      searchFilter: "old",
    };

    const expected: IRestaurantObject[] = [mockRestaurant];
    const result: IRestaurantObject[] = utils.applyFilters(
      mockStore.restaurants,
      filters
    );

    expect(result).toEqual(expected);
  });
});
