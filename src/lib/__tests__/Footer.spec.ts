/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/svelte';
import Footer from "../footer/Footer.svelte";
import '@testing-library/jest-dom/extend-expect';


test("should render Search", () => {
  const { getByText } = render(Footer);
  
  const input = getByText("Over 70 sports to experience");
  expect(input).toBeInTheDocument();

});