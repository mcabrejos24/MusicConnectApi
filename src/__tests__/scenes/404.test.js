import React from "react";
import { shallow } from "enzyme";
import FourOhFour from '../../scenes/404';
import toJson from "enzyme-to-json";

describe("renders 404", () => {
    let page;
    beforeEach(() => {
        page = shallow(<FourOhFour />);
    });
    it("404 loads", () => {
        page;
    });
    it("props class name matches", () => {
        expect(page.props().className).toEqual("content four-oh-four-page");
    });
    it("matches snapshot", () => {
        expect(toJson(page)).toMatchSnapshot();
    });
});
