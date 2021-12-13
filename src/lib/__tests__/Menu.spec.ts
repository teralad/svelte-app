/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import Menu from "../menu/Menu.svelte";
import '@testing-library/jest-dom/extend-expect';


test("should render Search", () => {
  const { getByText } = render(Menu);
  
  expect(getByText("All Sports")).toBeInTheDocument();
  expect(getByText("Men")).toBeInTheDocument();
  expect(getByText("Women")).toBeInTheDocument();
  expect(getByText("Kids")).toBeInTheDocument();
  expect(getByText("Accessories")).toBeInTheDocument();
  expect(getByText("Nutrition & Body Care")).toBeInTheDocument();

});