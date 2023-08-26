import { observer } from 'mobx-react-lite';
import Channel from '../models/channel';
import ChannelView from './channel-view';
import Song from '../models/song';
import { makeAutoObservable } from 'mobx';
import Step from '../models/step';

function createEmptySteps(length = 16) {
  return Array.from({ length }, () => new Step());
}

const songs = [
  new Song({ name: 'Hi-hat (foot)', fileName: 'hihatfod' }),
  new Song({ name: 'Tom-tom', fileName: 'sidetamlys' }),
  new Song({ name: 'Floor tom', fileName: 'gulvtam' }),
  new Song({ name: 'Ride cymbal', fileName: 'ride' }),
  new Song({ name: 'Hi-hat', fileName: 'hihat' }),
  new Song({ name: 'Snare drum', fileName: 'lilletromme' }),
  new Song({ name: 'Bass drum', fileName: 'stortromme' }),
];

export class DrumMachineState {
  channels = [
    new Channel({ song: songs[0], steps: createEmptySteps() }),
    new Channel({ song: songs[1], steps: createEmptySteps() }),
    new Channel({ song: songs[2], steps: createEmptySteps() }),
    new Channel({ song: songs[3], steps: createEmptySteps() }),
    new Channel({
      song: songs[4],
      steps: [
        new Step(true),
        new Step(),
        new Step(true),
        new Step(),
        new Step(true),
        new Step(),
        new Step(true),
        new Step(),
        new Step(true),
        new Step(),
        new Step(true),
        new Step(),
        new Step(true),
        new Step(),
        new Step(true),
        new Step(),
      ],
    }),
    new Channel({
      song: songs[5],
      steps: [
        new Step(),
        new Step(),
        new Step(),
        new Step(),
        new Step(true),
        new Step(),
        new Step(),
        new Step(),
        new Step(),
        new Step(),
        new Step(),
        new Step(),
        new Step(true),
        new Step(),
        new Step(),
        new Step(),
      ],
    }),
    new Channel({
      song: songs[6],
      steps: [
        new Step(true),
        new Step(true),
        new Step(true),
        new Step(),
        new Step(),
        new Step(),
        new Step(true),
        new Step(true),
        new Step(true),
        new Step(),
        new Step(),
        new Step(true),
        new Step(),
        new Step(),
        new Step(true),
        new Step(true),
      ],
    }),
  ];
  isPlaying = false;
  tempo = 100;
  maxSteps = 16;
  currentStep = 0;
  intervalId: undefined | number;

  constructor() {
    makeAutoObservable(this);

    this.toggle = this.toggle.bind(this);
    this.tick = this.tick.bind(this);
  }

  toggle() {
    if (this.isPlaying) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
      this.isPlaying = false;
    } else {
      this.currentStep = 0;
      this.intervalId = setInterval(this.tick, this.tickInterval());
      this.isPlaying = true;
    }
  }

  tickInterval() {
    const beatsPerSecond = this.tempo / 60;
    const sixteenthsPerSecond = beatsPerSecond * 4;
    const tickInterval = 1000 / sixteenthsPerSecond;

    return tickInterval;
  }

  tick() {
    for (const channel of this.channels) {
      if (channel.steps[this.currentStep].isPlaying) {
        channel.song.play();
      }
    }

    this.currentStep += 1;
    if (this.currentStep >= this.maxSteps) {
      this.currentStep = 0;
    }
  }
}

const state = new DrumMachineState();

const DrumMachine = observer(() => {
  return (
    <>
      <div className="mb-4">
        <button
          onClick={state.toggle}
          className="pointer-events-auto rounded-md border px-3 py-2 leading-5"
        >
          {state.isPlaying ? '⏸️' : '▶️'}
        </button>
      </div>
      <div>
        {state.channels.map((channel, index) => (
          <ChannelView channel={channel} drumMachine={state} key={index} />
        ))}
      </div>
    </>
  );
});

export default DrumMachine;
