import React from "react";
import "./styles.css";
import FlareComponent from "flare-react";
import PlayController from "./PlayController";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playController: new PlayController(), show: false };
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleClick(this.state)}>play</button>
        <br />
        {this.state.show && (
          <FlareComponent
            width={200}
            height={200}
            transparent={true}
            controller={this.state.show ? this.state.playController : undefined}
            file="SuccessCheck.flr"
          />
        )}
      </div>
    );
  }

  handleClick(state) {
    this.setState({ playController: new PlayController(), show: true });
  }
}
