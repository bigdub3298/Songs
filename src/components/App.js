import React from "react";
import SongList from "./SongList";

export default function App() {
  return (
    <div className="ui container grid" style={{ marginTop: "1rem" }}>
      <div className="ui row">
        <div className="eight wide column">
          <SongList />
        </div>
      </div>
    </div>
  );
}
