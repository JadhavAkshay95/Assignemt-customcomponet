import { Slider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import CustomDropDown from "./../custom-component/CustomDropDown";
import { locationData, marksData, skillData, techData } from "./../Data";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: "initial",
    maxHeight: 501,
    minHeight: 501,
    overflowY: "scroll",
  },
});

const EmpFilter = ({ filterData, clearFilter }) => {
  const [technology, setTechnology] = useState([]);
  const [skills, setSkills] = useState([]);
  const [location, setLocation] = useState([]);
  const [exp, setExp] = useState(0);
  const [clear, setClear] = useState("false");

  const [selectedTechnology, setSelectedTechnology] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const classes = useStyles();

  const filter = () => {
    setClear("false");

    filterData({
      skills: selectedSkills,
      technology: selectedTechnology,
      location: selectedLocations,
      exp,
    });
  };

  const cancel = () => {
    clearFilter();
    setTechnology(technology);
    setSkills(skills);
    setLocation(location);
    setClear("true");
  };

  const handleChange = (event, newValue) => {
    setExp(newValue);
    setClear("false");
  };

  const selectedListItem = (list, label) => {
    const selectedOptions = list
      .filter((item) => {
        if (item.selected) {
          return item;
        }
      })
      .map((item) => item.item);

    switch (label) {
      case "Technology":
        setSelectedTechnology(selectedOptions);
        break;

      case "Skills":
        setSelectedSkills(selectedOptions);
        break;

      case "Location":
        setSelectedLocations(selectedOptions);
        break;
    }
  };

  return (
    <>
      <div className="filter-container">
        <Card className={classes.root}>
          <span className="filter-by">Filter By</span>
          <div className="filter-container-test">
            <div className="filter-data">
              <CustomDropDown
                label={"Technology"}
                placeholder={"Select Tech"}
                listOptions={techData}
                selectedListItem={selectedListItem}
                clear={clear}
              />
            </div>
            <div className="filter-data">
              <CustomDropDown
                label={"Skills"}
                placeholder={"Select Skills"}
                listOptions={skillData}
                selectedListItem={selectedListItem}
                clear={clear}
              />
            </div>
            <div className="slider-container">
              <div className="drop-down-naame">Total Experiene</div>
              <Slider
                valueLabelDisplay="auto"
                aria-labelledby="continuous-slider"
                value={exp}
                onChange={handleChange}
                defaultValue={0}
                marks={marksData}
                clear={clear}
                min={0}
                max={20}
              />
            </div>
            <div className="filter-data">
              <CustomDropDown
                label={"Location"}
                placeholder={"Select Location"}
                listOptions={locationData}
                selectedListItem={selectedListItem}
                clear={clear}
              />
            </div>
          </div>
          <CardActions className="filter-footer">
            <Button
              className="filter-button"
              variant="outlined"
              size="small"
              color="primary"
              onClick={cancel}
            >
              Cancel
            </Button>
            <Button
              className="filter-button"
              variant="contained"
              size="small"
              color="primary"
              onClick={filter}
            >
              Done
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default EmpFilter;
