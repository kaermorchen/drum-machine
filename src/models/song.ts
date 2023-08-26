import { makeAutoObservable } from 'mobx';

type SongArgs = Pick<Song, 'name'>;

export default class Song {
  name: string;

  constructor(args: SongArgs) {
    makeAutoObservable(this);

    this.name = args.name;
  }
}
