import { makeAutoObservable } from 'mobx';

type SongArgs = Pick<Song, 'name'>;

export default class Song {
  name: string;

  constructor(args: SongArgs) {
    makeAutoObservable(this);

    this.name = args.name;

    this.play = this.play.bind(this);
  }

  get url() {
    return `/songs/${this.name}.mp3`;
  }

  play() {
    new Audio(this.url).play();
  }
}
