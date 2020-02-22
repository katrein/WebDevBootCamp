var movies = [
  {
    title: "Despicable Me",
    rating: 5,
    has_watched: true
  },
  {
    title: "The Giver",
    rating: 4,
    has_watched: true
  },
  {
    title: "Paddington",
    rating: 1,
    has_watched: true
  }
]

// First way
movies.forEach(function(movie){
  var result = "You have ";
  if(movie.has_watched){
    result+= "watched ";
  }else{
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result)
})

// Second way
function buildString(movie){
  var result = "You have ";
  if(movie.has_watched){
    result+= "watched ";
  }else{
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
}

movies.forEach(function(movie){
  console.log(buildString(movie));
});
