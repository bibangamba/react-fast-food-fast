import { shallow } from "enzyme";
import React from "react";
import NotFound from "./404";

describe("NotFound page test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NotFound />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
