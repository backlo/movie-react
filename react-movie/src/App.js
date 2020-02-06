import React from 'react';
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount() {
    setTimeout(() => {
        this.setState({isLoading: false, book: true});
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {this.state.isLoading ? "Loading..." : "we are ready"}
      </div>
    );
  }
}

export default App;
