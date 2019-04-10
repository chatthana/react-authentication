import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { clear } from '../../../redux/actions/alert';
import AlertStyle from './style';

class Alert extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  toggleVisibility() {
    const { clearMessage } = this.props;
    clearMessage();
  }

  render() {

    const { alert } = this.props;

    return (
      <AlertStyle>
        { alert.message &&
          <Toast>
            <ToastHeader toggle={this.toggleVisibility.bind(this)} icon={alert.type}>Notification</ToastHeader>
            <ToastBody>{alert.message}</ToastBody>
          </Toast>
        }
      </AlertStyle>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    alert: state.alert
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clearMessage: () => dispatch(clear())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);