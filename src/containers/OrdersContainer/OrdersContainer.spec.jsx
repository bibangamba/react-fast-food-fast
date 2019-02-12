import { shallow } from "enzyme";
import React from "react";
import OrdersView from "./OrdersContainer";

describe("OrdersView page test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<OrdersView />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
