import * as Actions from "./../../redux/actions";
import { connect } from "react-redux";
import EmpFilter from "../presentational-component/EmpFilter";

const mapDispatchToProps = {
  filterData: Actions.filterData,
  clearFilter : Actions.clearFilter
};

export default connect(null, mapDispatchToProps)(EmpFilter);
