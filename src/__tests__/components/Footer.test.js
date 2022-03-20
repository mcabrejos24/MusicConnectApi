import React from "react";
import { shallow } from "enzyme";
import Footer from '../../components/Footer';
import toJson from "enzyme-to-json";

describe("renders Footer", () => {
    let page;
    beforeEach(() => {
        page = shallow(<Footer />);
    });
    it("Footer loads", () => {
        page;
    });
    it("props class name matches", () => {
        expect(page.props().className).toEqual("footer");
    });
    it("matches snapshot", () => {
        expect(toJson(page)).toMatchSnapshot();
    });
});
