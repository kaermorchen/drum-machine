import { makeAutoObservable } from 'mobx';

export default class Step {
  isPlaying: boolean;

  constructor(isPlaying = false) {
    makeAutoObservable(this);

    this.isPlaying = isPlaying;

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.isPlaying = !this.isPlaying;
  }
}
