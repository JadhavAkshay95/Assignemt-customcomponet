import * as Actions from "../../redux/actions";
import { connect } from "react-redux";
import SearchBox from "./../presentational-component/SearchBox";

const mapDispatchToProps = {
  filterData: Actions.filterByName,
};

export default connect(null, mapDispatchToProps)(SearchBox);
