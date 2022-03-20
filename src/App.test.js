import App from './App';
import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("tests App.js", () => {
  it("renders App without crashing", () => {
    shallow(<App />);
  });
  it("compares App snapshot to check if it renders correctly", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
})
