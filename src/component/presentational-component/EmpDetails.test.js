import { shallow } from "enzyme";
import { EmpDetails } from "./EmpDetails";
import React from "react";

const employee = {
  id: "1",
  name: "John Smith",
  designation: "Senior UI developer",
  exp: 11,
  technologies: ["XD", "Sketch", "Figma"],
  skills: ["UX", "UI", "Visual"],
  avaibility: "3",
  location: ["Indore", "Pune"],
  isOpenForRelocation: false,
  message: "",
};

describe("Emp details Component", () => {
  it("Should render Emp details component", () => {
    let open = "true";
    const wrapper = shallow(<EmpDetails employee={employee} open={open} />);
    expect(wrapper).toMatchSnapshot();
  });
});
