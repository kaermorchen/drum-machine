import { makeAutoObservable } from 'mobx';

type SongArgs = Pick<Song, 'name' | 'fileName'>;

export default class Song {
  name: string;
  fileName: string;

  constructor(args: SongArgs) {
    makeAutoObservable(this);

    this.name = args.name;
    this.fileName = args.fileName;

    this.play = this.play.bind(this);
  }

  get url() {
    return `/drum-machine/songs/${this.fileName}.mp3`;
  }

  play() {
    new Audio(this.url).play();
  }
}
