import { shallow } from "enzyme";
import EmpFilter from "./EmpFilter";
import React from "react";
import CustomDropDown from "./CustomDropDown";

describe("Emp Filter Component", () => {
  it("Should render Emp filter component", () => {
    const wrapper = shallow(<EmpFilter />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render Custom Drop down  component", () => {
    const listOptions = ["UX", "UI", "Visual", "Java", "C"];
    const label = "Skills";
    const placeholder = "select skills";
    const dropDownwrapper = shallow(
      <CustomDropDown
        listOptions={listOptions}
        label={label}
        placeholder={placeholder}
      />
    );

    const empFilterwrapper = shallow(<EmpFilter />);
    expect(dropDownwrapper).toMatchSnapshot();
  });
});
