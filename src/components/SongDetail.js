import React from 'react';
import { connect } from 'react-redux';

// pass the state.song as an argument
const SongDetail = ({song}) => {
  if (!song) {
    return <div>select a song</div>
  }
  // console.log(props);
  return (
    <div>
      <h3>Details for:</h3>
      <p>
      Title: {song.title}
      {/* </p>
      <p> */}
      <br />
      Duration: {song.duration}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("sd_mapstate_toprops")
  console.log(state.selectedSong)
  return { song: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);