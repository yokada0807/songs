export const selectSong = song => {
  console.log("selectedSong_called")
  //Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

