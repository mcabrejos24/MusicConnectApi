import React from "react";
import { shallow } from "enzyme";
import Home from '../../scenes/HomeSPA/Home';
import toJson from "enzyme-to-json";

describe("renders Home page", () => {
    let page;
    beforeEach(() => {
        page = shallow(<Home />);
    });
    it("Home loads", () => {
        page;
    });
    it("props class name matches", () => {
        expect(page.props().className).toEqual("content home-page");
    });
    it("matches snapshot", () => {
        expect(toJson(page)).toMatchSnapshot();
    });
});
