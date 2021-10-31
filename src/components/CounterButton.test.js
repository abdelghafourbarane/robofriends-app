import { shallow } from "enzyme";
import React from "react";

import CounterButton from "./CounterButton";

describe("tests Counter Button component", () => {
  it("expect to render CounterButton component", () => {
    expect(shallow(<CounterButton />)).toMatchSnapshot();
  });

  it("expect to increment the counter", () => {
    const colorMock = "red";
    const wrapper = shallow(<CounterButton color="red" />);
    wrapper.find('[id="button"]').simulate("click");
    expect(wrapper.state()).toEqual({ count: 2 });
    expect(wrapper.props().color).toEqual(colorMock);
  });
});
