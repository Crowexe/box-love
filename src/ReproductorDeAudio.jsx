import React, { Component } from 'react';

class ReproductorDeAudio extends Component {
  constructor(props) {
    super(props);

    this.audioElement = React.createRef();
  }

  componentDidMount() {
    this.audioElement.current.play();
  }

  render() {
    return (
      <div>
        <audio>
          <source src="/images/1.mp3" type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

export default ReproductorDeAudio;