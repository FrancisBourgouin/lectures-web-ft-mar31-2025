import { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.report = (event) =>
      console.log(
        "User clicked on the screen at position:",
        event.clientX,
        event.clientY
      );
  }

  componentDidMount() {
    document.addEventListener("click", this.report);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.report);
  }

  render() {
    return (
      <header>
        <h1>Classy Github Viewer of Destiny!</h1>
      </header>
    );
  }
}
