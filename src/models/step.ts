import { makeAutoObservable } from 'mobx';

export default class Step {
  constructor() {
    makeAutoObservable(this);
  }
}
