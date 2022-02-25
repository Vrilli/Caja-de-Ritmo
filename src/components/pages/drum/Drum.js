import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Drum.css';

const row1 = [
  { id: 'boom', letter: 'Q', src: 'https://github.com/TurtleWolfe/fccTempLate/blob/master/src/components/pages/drum/javaScript30daysDRUM/boom.wav?raw=true' },
  { id: 'clap', letter: 'W', src: 'https://github.com/TurtleWolfe/fccTempLate/blob/master/src/components/pages/drum/javaScript30daysDRUM/clap.wav?raw=true' },
  { id: 'hihat', letter: 'E', src: 'https://github.com/TurtleWolfe/fccTempLate/blob/master/src/components/pages/drum/javaScript30daysDRUM/hihat.wav?raw=true' },
];

const row2 = [
  { id: 'kick', letter: 'A', src: 'https://github.com/TurtleWolfe/fccTempLate/blob/master/src/components/pages/drum/javaScript30daysDRUM/kick.wav?raw=true' },
  { id: 'openhat', letter: 'S', src: 'https://github.com/TurtleWolfe/fccTempLate/blob/master/src/components/pages/drum/javaScript30daysDRUM/openhat.wav?raw=true' },
  { id: 'ride', letter: 'D', src: 'https://github.com/TurtleWolfe/fccTempLate/blob/master/src/components/pages/drum/javaScript30daysDRUM/ride.wav?raw=true' },
];

const row3 = [
  { id: 'snare', letter: 'Z', src: 'https://github.com/TurtleWolfe/fccTempLate/blob/master/src/components/pages/drum/javaScript30daysDRUM/snare.wav?raw=true' },
  { id: 'piano', letter: 'X', src: 'https://github.com/TurtleWolfe/fccTempLate/blob/master/src/components/pages/drum/piano/a1.mp3?raw=true' },
  { id: 'tom', letter: 'C', src: 'https://github.com/TurtleWolfe/fccTempLate/blob/master/src/components/pages/drum/javaScript30daysDRUM/tom.wav?raw=true' },
];

class DrumPad extends React.Component {

  componentDidMount() {
    console.log(this.audio);
    document.addEventListener('keydown', this.handleKeydown);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
  };

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  };

  render() {
    return (
      <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1}
        variant="success"
        id={this.props.id}
        onClick={this.handleClick}
      >
        <h5>{this.props.letter}</h5>
        <audio id={this.props.letter}
          className='clip'
          src={this.props.src}
          ref={ref => this.audio = ref}
        ></audio>
      </Col>
    );
  }
}


export class Drum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'Click en cualquier letra'
    };
  }

  static propTypes = {
    display: PropTypes.string.isRequired,
  };

  handleDisplay = display => this.setState({ display });

  render() {
    return (
      <Container id='drum-machine'>
    
        <Col as={"h3"} id='display'>{this.state.display}</Col>
        <Row className="justify-content-center" id='drum-pads'>{row1.map(d => (
          <DrumPad
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />
        ))}</Row>
        <Row className="justify-content-center" id='drum-pads'>{row2.map(d => (
          <DrumPad
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />
        ))}</Row>
        <Row className="justify-content-center" id='drum-pads'>{row3.map(d => (
          <DrumPad
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />
        ))}</Row>
        <input id="typeinp" type="range" min="0" max="49" defaultValue="17" step="1" />

      </Container>
    );
  }
}

export default Drum;


