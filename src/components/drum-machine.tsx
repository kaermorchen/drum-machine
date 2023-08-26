import { observer } from 'mobx-react-lite';
import { observable } from 'mobx';
import Channel from '../models/channel';

interface DrumMachineState {
  channels: Channel[];
}

const state = observable<DrumMachineState>({
  channels: [],
});

const DrumMachine = observer(() => {
  return <div className=""></div>;
});

export default DrumMachine;
