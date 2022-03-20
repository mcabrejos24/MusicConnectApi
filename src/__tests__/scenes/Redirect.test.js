import React from "react";
import { shallow } from "enzyme";
import Redirect from '../../scenes/Redirect';
import toJson from "enzyme-to-json";

describe("renders Redirect page", () => {
    let page;
    beforeEach(() => {
        page = shallow(<Redirect />);
    });
    it("Redirect loads", () => {
        page;
    });
    it("props class name matches", () => {
        expect(page.props().testData).toEqual("no-href-or-callback");
    });
    it("matches snapshot", () => {
        expect(toJson(page)).toMatchSnapshot();
    });
});

describe("tests with href, spotifiyCallback and page params", () => {
    let testHref;
    let testSpotifyCallback;
    let page;
    beforeEach(() => {
        testSpotifyCallback = (payload) => {
            return payload;
        };    
    });
    describe("tests for failed condition of no redirect", () => {
        beforeEach(() => {
            testHref = 'supposed to fail url';
            page = shallow(<Redirect testHref={testHref} testSpotifyCallback={testSpotifyCallback}/>);
        });
        it("redirect not passed into url", () => {
            expect(page.props().testData).toEqual("no-redirect-in-url");
        });
        it("matches snapshot", () => {
            expect(toJson(page)).toMatchSnapshot();
        });
    });
    
    describe("tests for failed condition of no state and code params", () => {
        beforeEach(() => {
            testHref = 'http://localhost:3000/redirect';
            page = shallow(<Redirect testHref={testHref} testSpotifyCallback={testSpotifyCallback}/>);
        });
    
        it("code and/or state not passed into url", () => {
            expect(page.props().testData).toEqual("no-code-and-or-state-in-url");
        });
        it("matches snapshot", () => {
            expect(toJson(page)).toMatchSnapshot();
        });
    });
});

describe("tests with testState param added", () => {
    let testHref;
    let testSpotifyCallback;
    let testState;
    let page;
    beforeEach(() => {
        testHref = 'http://localhost:3000/redirect?code=somecode&state=someState';
        testSpotifyCallback = (payload) => {
            return payload;
        };
    });
    describe("tests for failed condition of state not matching", () => {
        beforeEach(() => {
            testState = 'stateMeantToFail';
            page = shallow(<Redirect testHref={testHref} testSpotifyCallback={testSpotifyCallback} testState={testState}/>);
        });
    
        it("code and/or state not passed into url", () => {
            expect(page.props().testData).toEqual("state-failed-to-match");
        });
        it("matches snapshot", () => {
            expect(toJson(page)).toMatchSnapshot();
        });
    });
    
    describe("tests for correct render of Redirect page", () => {
        beforeEach(() => {
            testState = 'someState';
            page = shallow(<Redirect testHref={testHref} testSpotifyCallback={testSpotifyCallback} testState={testState}/>);
        });
        it("page got code sucessfully", () => {
            expect(page.props().testData).toEqual("render-successful");
        });
        it("has correct class", () => {
            expect(page.props().className).toEqual("content redirect-page");
        });
        it("page got code sucessfully", () => {
            expect(page.find("p").text()).toEqual("Redirect Page");
        });
        it("matches snapshot", () => {
            expect(toJson(page)).toMatchSnapshot();
        });
    });
});
