/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import Search from "../searchbar/Search.svelte";
import '@testing-library/jest-dom/extend-expect';


test("should render Search", () => {
  const { container, getByText, getByAltText, getByPlaceholderText } = render(Search, {props: {query: "TEST"}});
  
  const input = getByPlaceholderText("Search For A Product, A Sport or A Brand");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("TEST");

});