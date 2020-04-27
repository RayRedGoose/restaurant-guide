import React from 'react';
import { shallow } from 'enzyme';
import RestaurantCard from './RestaurantCard';

it('should match the snapshot', () => {
  const mockRestaurant = {
    id: 'ac11',
    name: 'Old Hickory Steakhouse',
    address1: "201 Waterfront St",
    city: "Oxon Hill",
    state: "MD",
    zip: "20745",
    lat: "38.782098",
    long: "-77.017492",
    telephone: "(301) 965-4000",
    tags: "Social,Food and Dining,Restaurants,Steakhouses",
    website: "http://www.gaylordnational.com",
    genre: "Steak,American,Contemporary,Seafood,Cafe",
    hours: "Open Daily 5:30 PM-10:00 PM",
    attire: "business casual"
  };
  
  const wrapper = shallow(
    <RestaurantCard restaurant={mockRestaurant} />
  );
  expect(wrapper).toMatchSnapshot();
});
