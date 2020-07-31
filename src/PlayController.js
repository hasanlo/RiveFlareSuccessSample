import FlareComponent from "flare-react";

export default class PlayController extends FlareComponent.Controller {
  constructor() {
    super();
    this._Play = null;
    this._playTime = 0;
  }

  initialize(artboard) {
    this._Play = artboard.getAnimation("play");
  }

  advance(artboard, elapsed) {
    // advance the walk time
    this._playTime += elapsed;
    const { _Play: play, _playTime: playTime } = this;

    if (playTime > 2) {
      return false;
    }
    play.apply(playTime % play.duration, artboard, 1.0);
    return true;
  }
}
