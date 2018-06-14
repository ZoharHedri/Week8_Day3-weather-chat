


  //"cities" is the array that have all temperature and comments!
  var posts = [ 
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]},
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]},
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]}
  ];
  

  // the current id to assign to a post
  //var currentId = 0;

  //var SpacebookApp = function () {

  var $posts = $('.posts'); //shortcut in Jquery  

  
  /*------------------------------function module---------------------------------*/
  //first function -> inside the module
  // var _findPostById = function (id) {
  //   for (var i = 0; i < posts.length; i ++) {
  //     if (posts[i].id === id) {
  //       return posts[i]; //return object of "post" and "id"
  //     }
  //   }
  // }

  // //#######################second function##############################
  // var createPost = function (text) {
  //   var post = {
  //     text: text,
  //     id: currentId,
  //     comments: [] //comments is the array that have all comments of post
  //   }

  //   currentId += 1;
  //   posts.push(post);
  //   //console.log(post);
  // }

  //#########################third function#########################
  // var renderPosts = function () {
  //   //debugger;
  //   $cities.empty();

  //   for (var i = 0; i < posts.length; i ++) {
  //     var post = posts[i];

  //     var commentsContainer = '<div class="comments-container">' +
  //     '<input type="text" class="comment-name" placeholder="Comment Text">' +
  //     '<button class="btn btn-primary add-comment">Post Comment</button> </div>';

  //     $posts.append('<div class="post" data-id=' + post.id + '>'
  //       + '<a href="#" class="remove">remove</a> ' + '<a href="#" class="show-comments">comments</a> ' 
  //       + post.text + '<ul class="post-comments"></ul>' + commentsContainer + '</div>');
  //   }
  // }

  // var renderPosts = function () {
  //   //debugger;
    
  //     var post = posts[posts.length-1];
  //     console.log(post);
  //     //alert(posts);
  //     var commentsContainer = '<div class="comments-container">' +
  //     '<input type="text" class="comment-name" placeholder="Comment Text">' +
  //     '<button class="btn btn-primary add-comment">Post Comment</button> </div>';

  //     $posts.append('<div class="post" data-id=' + post.id + '>'
  //       + '<a href="#" class="remove">remove</a> ' + '<a href="#" class="show-comments">comments</a> ' 
  //       + post.text + '<ul class="post-comments"></ul>' + commentsContainer + '</div>');
    
  // }



  //########################fourth function############################
  // var removePost = function (currentPost) {
  //   var $clickedPost = $(currentPost).closest('.post');
  //   var id = $clickedPost.data().id;

  //   var post = _findPostById(id);//call to internal func and get the post id to remove

  //   posts.splice(posts.indexOf(post), 1);
  //   $clickedPost.remove();
  // }

  //#########################fifth function#############################

  
  //#########################sixth function###############################
  //get the 'the button', and 'comment'
  // var createComment = function(btnComment,commentText){
  //   //alert(commentText + ' ' + btnThis); //good!! works,get the comment & the button
  //   //debugger;
  //   var tempId = 0; 
  //   var comment = {
  //     text: commentText,//the comment
  //     id: 0,     //id comment
  //     parentId: 0//id of the 'post' parent
  //   }

  //   var p_id = $(btnComment).closest(".post").data().id;//get the current 'post' and take his ID
  //   //alert(postOfComment);//good
  //   var commentLength = posts[p_id].comments.length; //get the "lenght" of the comments array in post
  //   if (commentLength > 0){
  //     tempId = (posts[p_id] .comments[commentLength - 1].id + 1);//give the right index to the current comment
  //   }
    
  //   comment.id = tempId;//give new id to the new comment!
  //   comment.parentId = p_id;
  //   //console.log(comment);// good
  //   posts[p_id].comments.push(comment);//put all thr comment into his post!
    
  // };
  // //#########################seventh function###########################
  // var renderComments = function(btnComment){
  //   //var p_id = $(btnThis).parent("div").parent(".post").find('ul'); //BOOM!! g00d!
  //   var p_id = $(btnComment).closest(".post").data().id;
  //   var ulPost = $(btnComment).closest(".post").find('ul');//is closest good??
  //   //console.log(p_id);//good
  //   //console.log(ulPost);//good

  //   //get the commet from the 'comments' array in the 'posts' array
  //   var commentIndex = posts[p_id].comments[posts[p_id].comments.length - 1];

  //   var theComment = '<li class="comment-post" data-id=' + commentIndex.id +'>' +
  //     '<a href="#" class="remove-commet">remove</a> ' + commentIndex.text + '</li>';
    
  //   //console.log(theComment);//good
  //   ulPost.append(theComment);//not good because its add the commet to all post!
    
  // };

  //#########################eighth function###########################
  // var removeComment = function(removeCommentbtn){
  //   var $removeCurrentComment = $(removeCommentbtn).parent('.comment-post');
  //   $removeCurrentComment.remove();
  // };

  //return {
    //createPost: createPost,
    //renderPosts: renderPosts,
    //removePost: removePost,

    // TODO: Implement
    //createComment: createComment,

    // TODO: Implement
    //renderComments: renderComments,

    // TODO: Implement
    //removeComment: removeComment,
    //toggleComments: toggleComments
  //}
//}
/*---------------------------end of module----------------------------*/

//var app = SpacebookApp();

var cities = [ 
    //{text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]},
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]}
]

var currentId = 0;
var $weather = $('.weather');

//Ajax function
var fetch = function (city) {
  var apiPath = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var units = '&units=metric'; 
  var apiKey = '&appid=d703871f861842b79c60988ccf3b17ec';
  $.ajax({
    method: "GET",
    url: apiPath + city + units + apiKey,
    //city, units=metric->give me the temprerature in CELSIUS,and i need an API key-> appid
    success: function(data) {
      console.log(data);//good!
      //$weather.empty();
      checkData(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); //ajax
}; //fetch



//#######################first function##############################
var checkData = function(dataWeather){
  if(dataWeather.cod === 401){
    alert("This City didn't existe.\nEnter another City");
    var noCity = "This City didn't existe.\nEnter another City";
    $('#city').val("");
  }
  else{
    var temper = dataWeather.main.temp;
    //console.log(temper); //good!
    createCity(dataWeather);
    renderCity(dataWeather);
    $('#city').val("");
  }
}; //checkData


//#######################second function##############################
var createCity = function (textWeather) {
  var tempBeforFixed = textWeather.main.temp;
  var tempAfterFixed = tempBeforFixed.toFixed();//good! ->Celcius

  var cityPost = {
    cityName: textWeather.name,
    temperature: tempAfterFixed,
    id: currentId,
    comments: [] //comments is the array that have all comments of post
  }

  currentId += 1;
  cities.push(cityPost);
  
  //console.log(cities);//good
};



//#########################third function#########################
var renderCity = function (textWeather) {
  var post = cities[cities.length-1];
  //console.log(post);//good!
  //alert(posts);
  var description = textWeather.weather[0].description;
  console.log(description);
  
  var date = new Date()
  var dateString = "at " + date.getHours()+ ":" + date.getMinutes() + " on " + date.getDate()  + "/" +
          (date.getMonth()+1) + "/" + date.getFullYear(); 
          //getMonth returns the month from 0 to 11 so i add 1

  //console.log(dateString);//good
  //alert(date); //good
  var celsiusToFahrenheit = (1.8*post.temperature)+32; //F = C*1.8+32 && C = (F-32)/1.8 
  var commentsContainer = '<div class="comments-container input-group">' +
  '<input type="text" class="comment-name form-control" placeholder="Comment about the weather in ' + post.cityName + '">' +
  '<span class="input-group-btn">' + 
  '<button type="button" class="btn btn-success add-comment">Comment</button>' + 
  '</span> </div>';
  //console.log(commentsContainer);

  $weather.append(
    '<div class="post" data-id=' + post.id + '>' + post.cityName + 
    /*'<button type="button">*/ '<i class="fa fa-trash fa-pull-right" style="color:red"></i>'/* </button>'*/ + '<br>' +
    '<p class="post-temp">'+ post.temperature + ' °C / ' + celsiusToFahrenheit.toFixed() + ' °F ' + dateString +
     '<br>' + description + /*'<ul class="post-comments"></ul>' +*/ commentsContainer + '</div>');
    
};


//help function
var _findPostById = function (id) {
  for (var i = 0; i < cities.length; i ++) {
    if (cities[i].id === id) {
      return cities[i]; //return object of "post" and "id"
    }
  }
};


//########################fourth function############################
var removeCity = function (currentPost) {
  var $clickedCity = $(currentPost).closest('.post');
  var id = $clickedCity.data().id;

  var post = _findPostById(id);//call to internal func and get the post id to remove

  cities.splice(cities.indexOf(post), 1);
  $clickedCity.remove();
};


//#########################fifth function###############################
//get the 'the button', and 'comment'
var createComment = function(btnComment,commentText){
    //alert(commentText + ' ' + btnThis); //good!! works,get the comment & the button
    
    var tempId = 0; 
    var comment = {
      text: commentText,//the comment
      id: 0,     //id comment
      parentId: 0//id of the 'post' parent
    }

    var p_id = $(btnComment).closest(".post").data().id;//get the current 'post' and take his ID
    //console.log("p-id "+p_id);//good
    //console.log("cities[p-id] "+cities[p_id].comments.length);//good
    

    var commentLength = cities[p_id].comments.length; //get the "lenght" of the comments array in post
    console.log(commentLength);

    if (commentLength > 0){
      tempId = (cities[p_id] .comments[commentLength - 1].id + 1);//give the right index to the current comment
    }
    
    comment.id = tempId;//give new id to the new comment!
    comment.parentId = p_id;
    //console.log(comment);// good
    cities[p_id].comments.push(comment);//put all thr comment into his post!

    
    //console.log("cities[p-id] "+cities[p_id].comments[commentLength - 1].text);//NOT good
    
};


//#########################sixth function###############################
var renderComments = function(btnComment){
  
  //var p_id = $(btnThis).parent("div").parent(".post").find('p'); //BOOM!! g00d!
  var p_id = $(btnComment).closest(".post").data().id;
  var comPost = $(btnComment).closest(".post").find('.post-temp');//is closest good?? form-control
  //console.log(p_id);//good
  //console.log(ulPost);//good

  //get the commet from the 'comments' array in the 'posts' array
  var commentIndex = cities[p_id].comments[cities[p_id].comments.length - 1]; //need id?

  var theComment = '<p class="comment-post">' + commentIndex.text + '<i class="fa fa-times fa-pull-right"></i> </p>';
  
  //console.log(theComment);//good
  comPost.append(theComment);//not good because its add the commet to all post!
  
};


//#########################seventh function###########################
var removeComment = function(removeCommentbtn){
  var $removeCurrentComment = $(removeCommentbtn).parent('.comment-post');//how to do
  $removeCurrentComment.remove();
};



/*^^^^^^^^^^^^^^^^^^^^^^Events^^^^^^^^^^^^^^^^^^^^^^*/
//add city
$('.add-temp').on('click', function () {//".add-temp" => the button class name of temperature 
  fetch($('#city').val());     //get the city and sent to the server by 'fetch' function

});


//add-comment -> COMMENT ON EACH WEATHER ENTRY
$('.weather').on('click', '.add-comment', function(){ // '.comment-name',
  var comText = $(this).closest(".post").find('.comment-name').val(); //
  
  //console.log(comText);//good
  //alert(comText);//good

  if (comText == ""){
    //console.log("nothing")//good
    return;
  }
  else{
    //var postOftempId = $(this).parent("div").parent(".post").data().id;//BOOM!! g00d!
    //alert($(this).parent("div").parent(".post").data().id);//good
    //alert(postOfComment); //good
    
    createComment(this,comText);
    renderComments(this);
    $(this).closest(".post").find('.comment-name').val("");

  }
  
});


//remove-city -> OPTIONAL: DELETE A WEATHER ENTRY
$('.weather').on('click', '.fa-trash', function () { //to fix
  removeCity(this);
});


//remove-commet -> OPTIONAL: DELETE A WEATHER ENTRY
$('.weather').on('click', '.fa-times', function(){
   removeComment(this);
});