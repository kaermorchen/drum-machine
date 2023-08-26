import { makeAutoObservable } from 'mobx';
import Step from './step';
import Song from './song';

type ChannelArgs = Pick<Channel, 'song' | 'steps'>;

export default class Channel {
  song: Song;
  steps: Step[];

  constructor({ song, steps }: ChannelArgs) {
    makeAutoObservable(this);

    this.song = song;
    this.steps = steps;
  }
}
