// var googleURL = 'https://www.googleapis.com/youtube/v3/search';

var ajaxGet = (options, callback) => {

  let data = {
    part: 'snippet',
    key: options.key || window.YOUTUBE_API_KEY,
    maxResults: options.max || 5,
    q: options.query || 'bon jovi',
    type: 'video',
    videoEmbeddable: 'true'
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: data,
    success: function(data) {
      //console.log(data.items);
      callback(data.items);
    },
    error: function(error) {
      console.error(error);
    }
  });

};

var debouncedAjaxGet = _.debounce(ajaxGet, 500);

var searchYouTube = (options, callback) => {

  // debounce ajax call
  if (options.debounce) {
    debouncedAjaxGet(options, callback);
  } else {
    ajaxGet(options, callback);
  }

};

window.searchYouTube = searchYouTube;
 