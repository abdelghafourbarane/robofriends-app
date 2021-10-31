import { shallow } from "enzyme";
import React from "react";

import CardList from "./CardList";

it("expect to render CardList component", () => {
  const cardsMock = [
    {
      id: 1,
      name: "Karim Benzema",
      email: "karim@gmail.com",
    },
    {
      id: 1,
      name: "Luka Modric",
      email: "luka@gmail.com",
    },
  ];
  expect(shallow(<CardList robots={cardsMock} />)).toMatchSnapshot();
});
