import React from "react";
import { shallow } from "enzyme";
import TermsOfUse from '../../scenes/TermsOfUse';
import toJson from "enzyme-to-json";

describe("renders TermsOfUse", () => {
    let page;
    beforeEach(() => {
        page = shallow(<TermsOfUse />);
    });
    it("TermsOfUse loads", () => {
        page;
    });
    it("props class name matches", () => {
        expect(page.props().className).toEqual("content terms-of-use-page");
    });
    it("matches snapshot", () => {
        expect(toJson(page)).toMatchSnapshot();
    });
});
