import { makeAutoObservable } from 'mobx';
import Step from './step';
import Song from './song';

type ChannelArgs = Pick<Channel, 'song'>;

export default class Channel {
  steps: Step[] = [];
  song: Song;

  constructor({ song }: ChannelArgs) {
    makeAutoObservable(this);

    this.song = song;
  }
}
