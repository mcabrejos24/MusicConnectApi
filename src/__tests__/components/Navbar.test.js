import React from "react";
import { shallow } from "enzyme";
import Navbar from '../../components/Navbar';
import toJson from "enzyme-to-json";

describe("renders Navbar", () => {
    let page;
    beforeEach(() => {
        page = shallow(<Navbar />);
    });
    it("Navbar loads", () => {
        page;
    });
    it("props class name matches", () => {
        expect(page.props().className).toEqual("navbar");
    });
    it("matches snapshot", () => {
        expect(toJson(page)).toMatchSnapshot();
    });

    it("can open mobile navigation bar", () => {
        page.find(".navbar-wrapper").find(".mobile-nav").simulate("click");
        expect(page.find(".navbar-wrapper").find(".site-options").hasClass("show-site-options")).toEqual(true);
        expect(toJson(page)).toMatchSnapshot();
    });
    it("changes mobile navbar icon to cancel", () => {
        page.find(".navbar-wrapper").find(".mobile-nav").simulate("click");
        expect(page.find(".navbar-wrapper").find(".mobile-nav").find(".menu").hasClass("hide-menu-icon")).toEqual(true);
        expect(page.find(".navbar-wrapper").find(".mobile-nav").find(".cancel").hasClass("show-cancel-icon")).toEqual(true);
    });
    it("can close mobile navigation bar", () => {
        page.find(".navbar-wrapper").find(".mobile-nav").simulate("click");
        page.find(".navbar-wrapper").find(".mobile-nav").simulate("click");
        expect(page.find(".navbar-wrapper").find(".site-options").hasClass("show-site-options")).toEqual(false);
        expect(toJson(page)).toMatchSnapshot();
    });
    it("changes mobile navbar icon to menu", () => {
        page.find(".navbar-wrapper").find(".mobile-nav").simulate("click");
        page.find(".navbar-wrapper").find(".mobile-nav").simulate("click");
        expect(page.find(".navbar-wrapper").find(".mobile-nav").find(".menu").hasClass("hide-menu-icon")).toEqual(false);
        expect(page.find(".navbar-wrapper").find(".mobile-nav").find(".cancel").hasClass("show-cancel-icon")).toEqual(false);
    });
});
