//Homework #1 Data Types

//This function creates a song with those variables.
function Song(name, artist, duration, album, genre, launchYear, doILikeIt){
  this.name=name;
  this.artist = artist;
  this.duration = duration;
  this.album = album;
  this.genre = genre;
  this.launchYear = launchYear;
  this.doILikeIt = doILikeIt;
}

//I create my song as an object.
/*The name of the song is a String. Genre and Album are shown as Strings too.
  The artists are written as an array of Strings.
  The length of the song and year of realize are both numbers.
  Lastly there is a boolean that is true if i like the song */
  
var motorsport = new Song("Motorsport", 
                          ["Migos", "Nicki Minaj" , "Cardi B"], 
                          303,  
                          "Culture II", 
                          "Hip-Hop", 
                          2018, 
                          true);

//We print in the console the attributes of the song.
console.log("The song name is: " + motorsport.name);
console.log("Played by: " + motorsport.artist.join(", "));
console.log("The album is: " + motorsport.album);
console.log("The song lasts " + motorsport.duration + " seconds");
console.log("The genre is: " + motorsport.genre);
console.log("The song was realized in " + motorsport.launchYear);

//Depending of whether i like the song or not, i print a message.
if(motorsport.doILikeIt){
  console.log("I like it.");
}else{
  console.log("I don't like it.");
}
