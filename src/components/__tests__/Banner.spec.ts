/**
 * @jest-environment jsdom
 */

 import { render } from '@testing-library/svelte';
 import Banner from "../banner/Banner.svelte";
 import '@testing-library/jest-dom/extend-expect';


 test("should render Banner", () => {
  const title = "Get ready to wrap up";
  const { container, getByText, getByAltText } = render(Banner);

  expect(container.querySelector("h1").textContent).toBe(title);
  expect(getByText(title)).toBeInTheDocument();
  expect(getByAltText("bannermobileimage")).toBeInTheDocument();  
  expect(getByAltText("desktopimage")).toBeInTheDocument();

  const image = getByAltText("desktopimage");
  expect(image).toHaveAttribute("src")
});