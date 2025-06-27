function printSong(){
  console.log("The Global Object") ;
}
const jukebox = {
  songs: [
    {
      title: "I Don't Want to Miss a Thing",
      artist:"Meghan Trainor",
    },
    {
      title: "baby",
      artist:"Justin Bieber",
    },
  ],
  printSong: function (song){
    console.log(song.title + " by " + song.artist);
  },
  printSongs: function () {

    this.songs.forEach(
      function(song){
      
      this.printSong(song);
    });
  },

};
jukebox.printSongs();