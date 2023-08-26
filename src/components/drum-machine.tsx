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
  new Song({ name: 'hihatfod' }),
  new Song({ name: 'sidetamlys' }),
  new Song({ name: 'gulvtam' }),
  new Song({ name: 'ride' }),
  new Song({ name: 'hihat' }),
  new Song({ name: 'lilletromme' }),
  new Song({ name: 'stortromme' }),
];

class DrumMachineState {
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

  constructor() {
    makeAutoObservable(this);
  }
}

const state = new DrumMachineState();

const DrumMachine = observer(() => {
  return (
    <div className="mb-4">
      {state.channels.map((channel, index) => (
        <ChannelView channel={channel} key={index} />
      ))}
    </div>
  );
});

export default DrumMachine;
