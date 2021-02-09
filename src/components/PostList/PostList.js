import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostAndUsers } from "../actions/action";
import UseHeader from "../useHeader/useHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostAndUsers();
  }
  // helper method
  renderList() {
    return this.props.posts.map((post) => {
      // returning multi-line JSX thus return has ()
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UseHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props.posts);
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  // now store has eveything from rootReducer and eveything rootReducer has accessible via state parameter here
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPostAndUsers: fetchPostAndUsers })(PostList);
// connect first argument would be state and then dispatched action
// whenever a component needs to dispatch so not using mapStateToProps then keep first argument as null
