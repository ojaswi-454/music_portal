import React from "react";

function Music() {
    return (
        <div class="music">
            <div id="player">
  <div class="album">
    <div class="heart"><i class="fas fa-heart"></i></div>
  </div>
  <div class="info">
    <div class="progress-bar">
      <div class="time--current">1:25</div>
      <div class="time--total">-3:15</div>
      <div class="fill"></div>
    </div>
    <div class="currently-playing">
      <h2 class="song-name">Symphony</h2>
      <h3 class="artist-name">Clean Bandit ft. Zara Larsson</h3>
    </div>
    <div class="controls">
      <div class="option"><i class="fas fa-bars"></i></div>
      <div class="volume"><i class="fas fa-volume-up"></i></div>
      <div class="previous"><i class="fas fa-backward"></i></div>
      <div class="play"><i class="fas fa-play"></i></div>
      <div class="pause"><i class="fas fa-pause"></i></div>
      <div class="next"><i class="fas fa-forward"></i></div>
      <div class="shuffle"><i class="fas fa-random"></i></div>
      <div class="add"><i class="fas fa-plus"></i></div>
    </div>
  </div>
</div>
            </div>
    );
}


export default Music;