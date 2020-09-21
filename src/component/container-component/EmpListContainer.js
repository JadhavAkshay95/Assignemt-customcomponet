import * as Actions from "./../../redux/actions";
import { connect } from "react-redux";
import EmployeeList from "./../presentational-component/EmplyeeList";

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = {
  getData: Actions.getData,
  deleteData: Actions.deleteRecord,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
