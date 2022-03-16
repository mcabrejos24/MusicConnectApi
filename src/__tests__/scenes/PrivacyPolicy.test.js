import React from "react";
import { shallow } from "enzyme";
import PrivacyPolicy from '../../scenes/PrivacyPolicy';
import toJson from "enzyme-to-json";

describe("renders PrivacyPolicy", () => {
    let page;
    beforeEach(() => {
        page = shallow(<PrivacyPolicy />);
    });
    it("PrivacyPolicy loads", () => {
        page;
    });
    it("props class name matches", () => {
        expect(page.props().className).toEqual("content privacy-policy-page");
    });
    it("matches snapshot", () => {
        expect(toJson(page)).toMatchSnapshot();
    });
});
