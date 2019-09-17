import React, { Component } from "react";

import Button from "./commons/Button";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleAuthenticate = this.handleAuthenticate.bind(this);
  }

  async handleAuthenticate() {
    await window.location.href =
      "https://api.instagram.com/oauth/authorize/?client_id=06069b9d685f4a8a86375f0aad76fa6b&redirect_uri=http://localhost:3000/&response_type=code";
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40vh"
        }}
      >
        <Button
          onClick={this.handleAuthenticate}
          label="Connect with your instagram"
        />
      </div>
    );
  }
}

export default Authentication;
