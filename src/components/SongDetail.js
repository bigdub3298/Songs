import React from "react";
import { connect } from "react-redux";

function SongDetail(props) {
  if (!props.song) {
    return <div></div>;
  }

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.song.title}</div>
        <div className="meta">{props.song.duration}</div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
