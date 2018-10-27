import { connect } from 'react-redux';
import LobinBox from '../components/LoginBox'
import * as actions from '../actions/LoginBoxActions';

const mapStateToProps = (state) => {
    return {
        message: state.message,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickSubmit() {
            dispatch(actions.onClickSubmit({message: 'clicked'}));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LobinBox);
