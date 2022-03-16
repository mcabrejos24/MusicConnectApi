import React from "react";
import { shallow } from "enzyme";
import ConnectOptions from '../../components/ConnectOptions';
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
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ConnectOptions />);
  })
  it("tests ConnectOptions itself", () => {
    wrapper;
  });
  it("test ConnectOptions snapshot no props", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("tests ConnectOptions component with shalloww", () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = createTestProps();
    wrapper = shallow(<ConnectOptions {...props}/>);
  })
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
  it('matches snapshot with props passed', () => {  
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
