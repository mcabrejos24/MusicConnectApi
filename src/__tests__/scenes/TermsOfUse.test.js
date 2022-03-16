import React from "react";
import { shallow } from "enzyme";
import TermsOfUse from '../../scenes/TermsOfUse';
import toJson from "enzyme-to-json";

describe("renders TermsOfUse without crashing", () => {
    let page;
    beforeEach(() => {
        page = shallow(<TermsOfUse />);
    });
    it("TermsOfUse loads", () => {
        page;
    });
    it("TermsOfUse matches snapshot", () => {
        expect(toJson(page)).toMatchSnapshot();
    });
});
