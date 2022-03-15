import { render, screen } from '@testing-library/react';
import React from "react";
import { shallow, mount } from "enzyme";
import ConnectOptions from '../components/ConnectOptions';
import toJson from "enzyme-to-json";

function createTestProps (props) {
  return {
    // common props
    description: "Pair both playlists here",
    image: "fakeimage.com",
    imageAlt: "my image alt",
    url: "path",
    // allow to override common props
    ...props,
  }
}

describe("renders ConnectOptions without crashing", () => {
  it("should not crash", () => {
    shallow(<ConnectOptions />);
  });
});

describe("tests ConnectOptions component with mount", () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = createTestProps();
    wrapper = mount(<ConnectOptions {...props}/>);
  })
  it("accepts component props", () => {
    expect(wrapper.props().description).toEqual("Pair both playlists here");
    expect(wrapper.props().image).toEqual("fakeimage.com");
    expect(wrapper.props().imageAlt).toEqual("my image alt");
    expect(wrapper.props().url).toEqual("path");
  });
  it("has correct path", () => {
    const href = wrapper.find("a").prop("href");
    expect(href).toEqual("path");
  });
  it("has correct img and img alt", () => {
    const imgSrc = wrapper.find("img").prop("src");
    const imgAlt = wrapper.find("img").prop("alt");
    expect(imgSrc).toEqual("fakeimage.com");
    expect(imgAlt).toEqual("my image alt");
  });
  it("has correct description", () => {
    const pValue = wrapper.find("p").text();
    expect(pValue).toEqual("Pair both playlists here");
  });
});

describe("tests ConnectOptions component with shallow", () => {
  it("compares ConnectOptions snapshot to check if it renders correctly", () => {
    const tree = shallow(<ConnectOptions />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
