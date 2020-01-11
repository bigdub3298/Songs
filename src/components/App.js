import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

export default function App() {
  return (
    <div className="ui container grid" style={{ marginTop: "1rem" }}>
      <div className="ui row">
        <div className="eight wide column">
          <SongList />
        </div>
        <div className="eight wide column">
          <SongDetail />
        </div>
      </div>
    </div>
  );
}
