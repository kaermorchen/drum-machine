import { makeAutoObservable } from 'mobx';

type SongArgs = Pick<Song, 'name'>;

export default class Song {
  name: string;
  audio: HTMLAudioElement;

  constructor(args: SongArgs) {
    makeAutoObservable(this);

    this.name = args.name;
    this.audio = new Audio(this.url);

    this.play = this.play.bind(this);
  }

  get url() {
    return `/songs/${this.name}.mp3`;
  }

  play() {
    this.audio.play();
  }
}
