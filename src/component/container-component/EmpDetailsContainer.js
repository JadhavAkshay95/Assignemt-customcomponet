import EmpDetails from "./../presentational-component/EmpDetails";
import * as Actions from "./../../redux/actions";
import { connect } from "react-redux";

const mapDispatchToProps = {
  updateData: Actions.UPDATE_DATA,
};

export default connect(null, mapDispatchToProps)(EmpDetails);
