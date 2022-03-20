import React from "react";
import { shallow } from "enzyme";
import SiteMap from '../../scenes/SiteMap';
import toJson from "enzyme-to-json";

describe("renders SiteMap", () => {
    let page;
    beforeEach(() => {
        page = shallow(<SiteMap />);
    });
    it("SiteMap loads", () => {
        page;
    });
    it("props class name matches", () => {
        expect(page.props().className).toEqual("content site-map-page");
    });
    it("matches snapshot", () => {
        expect(toJson(page)).toMatchSnapshot();
    });
});
