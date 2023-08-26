import { observer } from 'mobx-react-lite';
import Channel from '../models/channel';
import ChannelView from './channel-view';
import Song from '../models/song';
import { makeAutoObservable } from 'mobx';

const songs = [
  new Song({ name: 'aabenhihat' }),
  new Song({ name: 'gulvtam' }),
  new Song({ name: 'hihat' }),
  new Song({ name: 'hihatfod' }),
  new Song({ name: 'kantslag' }),
  new Song({ name: 'lilletromme' }),
  new Song({ name: 'ride' }),
  new Song({ name: 'sidetamdyb' }),
  new Song({ name: 'sidetamlys' }),
  new Song({ name: 'stortromme' }),
];

class DrumMachineState {
  channels = [new Channel({ song: songs[0] })];

  constructor() {
    makeAutoObservable(this);

    this.addChannel = this.addChannel.bind(this);
  }

  addChannel() {
    this.channels.push(new Channel({ song: songs[0] }));
  }
}

const state = new DrumMachineState();

const DrumMachine = observer(() => {
  return (
    <>
      <div className="mb-4">
        {state.channels.map((channel, index) => (
          <ChannelView channel={channel} key={index} />
        ))}
      </div>

      <button
        onClick={state.addChannel}
        className="pointer-events-auto rounded-md border px-3 py-2 leading-5"
      >
        Add channel
      </button>
    </>
  );
});

export default DrumMachine;
