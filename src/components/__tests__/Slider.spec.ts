/**
 * @jest-environment jsdom
 */

 import { render } from '@testing-library/svelte';
 import Slider from "../slider/Slider.svelte";
 import '@testing-library/jest-dom/extend-expect';
 
 
 test("should render Slider", () => {
   const { container, getByText, getByAltText, getByPlaceholderText } = render(Slider);
   
   const input = getByPlaceholderText("Search For A Product, A Sport or A Brand");
   expect(input).toBeInTheDocument();
   expect(input).toHaveValue("TEST");
 
 });