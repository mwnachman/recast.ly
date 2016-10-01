class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      playerVideo: window.exampleVideoData[0],
      videoList: [],
      firstSearch: true,
      searchYouTube: _.debounce(props.searchYouTube, 500)
    };
  }

  componentDidMount () {
    this.filterVideos('');
  }

  filterVideos (filterText) {
    if (this.state.firstSearch) {
      this.props.searchYouTube({ query: filterText }, this.populateVideos.bind(this));
      this.setState({ firstSearch : false });
    } else {
      this.state.searchYouTube({ query: filterText }, this.populateVideos.bind(this));
    }
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
window.App = App;
