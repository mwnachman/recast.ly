class Router extends React.Component {
  constructor(props) {
    super(props);
  }
};
  

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Router = Router;
