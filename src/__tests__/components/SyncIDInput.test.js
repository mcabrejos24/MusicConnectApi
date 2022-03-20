import React from "react";
import { shallow } from "enzyme";
import SyncIDInput from '../../components/SyncIDInput';
import toJson from "enzyme-to-json";

describe("renders SyncIDInput", () => {
    let page;
    let mockSyncReady
    beforeEach(() => {
        mockSyncReady = jest.fn();
        page = shallow(<SyncIDInput syncReady={mockSyncReady}/>);
    });
    it("SyncIDInput loads", () => {
        page;
    });
    it("props class name matches", () => {
        expect(page.props().className).toEqual("sync-id");
    });
    it("matches snapshot", () => {
        expect(toJson(page)).toMatchSnapshot();
    });
    it("check input exists", () => {
        expect(page.find("input").exists()).toEqual(true);
    });
    it("check input has class", () => {
        expect(page.find("input").hasClass("sync-id-input")).toEqual(true);
    });
    it("check input functionality with one key stroke", () => {
        page.find("input").simulate("keyup", { target: { value: "1", type: "tel"}, key: "1" });
        expect(page.find("input").hasClass("input-does-not-contain")).toEqual(true);
        expect(page.find("input").hasClass("input-contains")).toEqual(false);
    });
    it("check input functionality with four key strokes", () => {
        page.find("input").simulate("keyup", { target: { value: "1234", type: "tel"}, key: "4" });
        expect(page.find("input").hasClass("input-does-not-contain")).toEqual(true);
        expect(page.find("input").hasClass("input-contains")).toEqual(false);
    });
    it("check input functionality with four key strokes - matches snapshot", () => {
        page.find("input").simulate("keyup", { target: { value: "1234", type: "tel"}, key: "4" });
        expect(toJson(page)).toMatchSnapshot();
    });
    it("check input functionality with full inputs - six key strokes", () => {
        page.find("input").simulate("keyup", { target: { value: "123456", type: "tel"}, key: "6" });
        expect(page.find("input").hasClass("input-does-not-contain")).toEqual(false);
        expect(page.find("input").hasClass("input-contains")).toEqual(true);
    });
    it("check input functionality with full inputs - six key strokes", () => {
        page.find("input").simulate("keyup", { target: { value: "123456", type: "tel"}, key: "6" });
        expect(toJson(page)).toMatchSnapshot();
    });
    it("check input functionality with one key stroke", () => {
        expect(page.find("button").exists()).toEqual(true);
    });
    it("check input functionality with one key stroke", () => {
        expect(page.find("button").hasClass("sync-id-submit-button")).toEqual(true);
    });
    it("check input functionality with one key stroke", () => {
        page.find("input").simulate("keyup", { target: { value: "123456", type: "tel"}, key: "6" });
        page.find("button").simulate("click");
        expect(mockSyncReady.mock.calls.length).toBe(1);
        expect(mockSyncReady.mock.calls[0][0]).toBe("spotify");
    });
    it("check input functionality with one key stroke", () => {
        page.find("input").simulate("keyup", { target: { value: "123456", type: "tel"}, key: "6" });
        page.find("button").simulate("click");
        expect(toJson(page)).toMatchSnapshot();
    });
});
