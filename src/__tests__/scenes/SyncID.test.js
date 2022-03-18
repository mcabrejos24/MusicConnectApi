import React from "react";
import { shallow } from "enzyme";
import SyncID from '../../scenes/HomeSPA/SyncID';
import toJson from "enzyme-to-json";

describe("renders SyncID page", () => {
    let page;
    beforeEach(() => {
        page = shallow(<SyncID />);
    });
    it("SyncID loads", () => {
        page;
    });
    it("props class name matches", () => {
        expect(page.props().className).toEqual("content sync-id-page");
    });
    it("matches snapshot", () => {
        expect(toJson(page)).toMatchSnapshot();
    });
    it("pop up renders", () => {
        // setTimeout(() => {}),500);
        expect(page.find(".popup").text()).toEqual("Coming Soon!×This page is still in development so submitting won't actually do anything. But feel free to mess around!");
    });
    it("pop up renders", () => {
        expect(page.find(".popup").hasClass("popup-show")).toEqual(true);
        // expect(page.find(".popup").hasClass("popup-hide")).toEqual(false);
    });
    it("can dismiss popup", () => {
        page.find(".popup").simulate("click")
        // expect(page.find(".popup").hasClass("popup-hide")).toEqual(false);
    });
});


    // const popup = document.getElementById("popup");
    // popup.style.visibility = "visible";
    // popup.style.opacity = "1";