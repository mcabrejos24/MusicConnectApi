import React from "react";
import { shallow } from "enzyme";
import BackButton from '../../components/BackButton';
import toJson from "enzyme-to-json";

describe("renders BackButton", () => {
    let page;
    beforeEach(() => {
        page = shallow(<BackButton />);
    });
    it("BackButton loads", () => {
        page;
    });
    it("props class name matches", () => {
        expect(page.props().className).toEqual("btn-container");
    });
    it("matches snapshot", () => {
        expect(toJson(page)).toMatchSnapshot();
    });
});
