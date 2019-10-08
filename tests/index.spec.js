/* eslint-disable no-var */

import React from "react";

import Header from "../src/components/global/Header.js";
import { expect } from "chai";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Beers tag test", () => {
  const wrapper = shallow(<Header />);
  it("should be a <header> tag", () => {
    expect(wrapper.type()).to.eql("header");
  });
});
