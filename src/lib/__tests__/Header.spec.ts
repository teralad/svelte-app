/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import Header from "../header/Header.svelte";
import '@testing-library/jest-dom/extend-expect';


test("should render Search", async () => {
  const { container, getByText } = render(Header);
  
  const input = getByText("Over 70 sports to experience");
  expect(input).not.toBeInTheDocument();
  expect(container.getElementsByClassName("corner")).toBeInTheDocument();
});