import React from "react";
import { shallow } from "enzyme";
import OnHere from '../../scenes/HomeSPA/OnHere';
import toJson from "enzyme-to-json";

describe("renders OnHere page", () => {
    let page;
    beforeEach(() => {
        page = shallow(<OnHere />);
    });
    it("OnHere loads", () => {
        page;
    });
    it("props class name matches", () => {
        expect(page.props().className).toEqual("content on-here-page");
    });
    it("matches snapshot", () => {
        expect(toJson(page)).toMatchSnapshot();
    });
});
