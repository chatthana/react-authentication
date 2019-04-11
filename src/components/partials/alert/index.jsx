import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { clear } from '../../../redux/actions/alert';
import AlertStyle from './style';

class Alert extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  displayNotification(type, message) {
    this.setState({ visible: true, type, message }, () => {
      setTimeout(() => { this.setState({ visible: false }); }, 2000)
    });
  }

  render() {

    const { alert, clearMessage } = this.props;
    const { type, message, visible } = this.state;

    if (alert.message) {
      this.displayNotification(alert.type, alert.message);
      clearMessage();
    }

    return (
      <AlertStyle>
        <Toast isOpen={visible}>
          <ToastHeader icon={type}>Notification</ToastHeader>
          <ToastBody>{message}</ToastBody>
        </Toast>
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