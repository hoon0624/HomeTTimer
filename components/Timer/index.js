import { connect } from "react-redux";
import Timer from "./presenter";
import { bindActionCreators } from "redux";
import { actionCreators as hometActions } from "../../reducer";

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration,
  };
}

// dispatch is a function that sends action to the reducer
function mapDistpatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(hometActions.startTimer, dispatch),
    restartTimer: bindActionCreators(hometActions.restartTimer, dispatch),
    addSecond: bindActionCreators(hometActions.addSecond, dispatch),
  };
}

export default connect(mapStateToProps, mapDistpatchToProps)(Timer);
