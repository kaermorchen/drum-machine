import { makeAutoObservable } from 'mobx';

export default class Channel {
  constructor() {
    makeAutoObservable(this);
  }
}
