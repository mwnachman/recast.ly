'use strict';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = { 
      playerVideo: window.exampleVideoData[0],
      videoList: [],
    };
  }

  componentDidMount () {
    this.filterVideos('', false); // no debouncing on launch
  }

  filterVideos (filterText, debounce) {
    debounce = debounce || true; // debounce by default
    this.props.searchYouTube({ query: filterText, debounce: debounce }, this.populateVideos.bind(this));
  }

  populateVideos (videos) {
    this.setState({
      playerVideo: videos[0],
      videoList: videos
    });
  }

  changePlayerVideo (video) {
    this.setState({ playerVideo : video });
  }

  render () {
    return (
      <div>
        <Nav filterVideos={this.filterVideos.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.playerVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} changePlayerVideo={this.changePlayerVideo.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
//window.App = App;
export default App;