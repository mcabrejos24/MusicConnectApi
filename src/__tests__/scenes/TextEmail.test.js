import React from "react";
import { shallow } from "enzyme";
import TextEmail from '../../scenes/HomeSPA/TextEmail';
import toJson from "enzyme-to-json";

describe("renders TextEmail page without useEffect hooke", () => {
    it("TextEmail renders", () => {
        shallow(<TextEmail/>);
    });
});

describe("renders TextEmail page", () => {
    let page;
    beforeEach(() => {
        page = shallow(<TextEmail isTest={true}/>);
        setTimeout(
            page.find(".test-element.hidden").find("#testOpenPopUp").simulate("click"),
            500
        );
    });

    it("TextEmail loads", () => {
        page;
    });
    it("props class name matches", () => {
        expect(page.props().className).toEqual("content page-text-email");
    });
    it("matches snapshot", () => {
        expect(toJson(page)).toMatchSnapshot();
    });
    it("pop up renders", () => {
        expect(page.find(".popup").text()).toEqual("Coming Soon!×This page is still in development so submitting won't actually do anything. But feel free to mess around!");
    });
    it("pop up renders", () => {
        expect(page.find(".popup").hasClass("popup-show")).toEqual(true);
        expect(page.find(".popup").hasClass("popup-hide")).toEqual(false);
    });
    it("can dismiss popup", () => {
        page.find(".popup").find(".popup-card").find("#close").simulate("click");
        expect(page.find(".popup").hasClass("popup-show")).toEqual(false);
        expect(page.find(".popup").hasClass("popup-hide")).toEqual(true);
    });
});
