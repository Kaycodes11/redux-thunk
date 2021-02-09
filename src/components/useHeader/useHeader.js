import React from "react";
import { connect } from "react-redux";

class UseHeader extends React.Component {
  render() {
    // const users = this.props.users.find(user => user.id === this.props.userId);
    const { user } = this.props;
    if (!user) return null;
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // use ownProps like here whatever state id may be that compare against ownProps.id; to access output value
  // just get from this.props.user; as this property would be avaiable within props; si just use it as needed
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UseHeader);

/*
when used memoize the function run once and after that if the returned value remained same then it won't re-run the
original function again rather just get the result from before and so if an unique/new value provided that it will surely
run again but if the input remain same; again it won't re-run the original function again to get the same value

*/
