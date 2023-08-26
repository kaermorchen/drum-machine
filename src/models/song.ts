import { makeAutoObservable } from 'mobx';

export default class Song {
  constructor() {
    makeAutoObservable(this);
  }
}
