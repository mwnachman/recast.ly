// var googleURL = 'https://www.googleapis.com/youtube/v3/search';

var searchYouTube = (options, callback) => {

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

window.searchYouTube = searchYouTube;
