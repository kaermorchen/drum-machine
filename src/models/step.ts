import { makeAutoObservable } from 'mobx';

export default class Step {
  isPlaying = false;

  constructor() {
    makeAutoObservable(this);

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.isPlaying = !this.isPlaying;
  }
}
