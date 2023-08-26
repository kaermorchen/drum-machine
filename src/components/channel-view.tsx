import Channel from '../models/channel';
import { DrumMachineState } from './drum-machine';
import StepView from './step-view';
import { observer } from 'mobx-react-lite';

interface ChannelViewProps {
  channel: Channel;
  drumMachine: DrumMachineState;
}

const ChannelView = observer(({ channel, drumMachine }: ChannelViewProps) => {
  return (
    <div className="flex mb-2 items-center">
      <div className="w-48 cursor-pointer" onClick={channel.song.play}>
        {channel.song.name}
      </div>
      <div className="flex">
        {channel.steps.map((step, index) => (
          <StepView
            step={step}
            channel={channel}
            key={index}
            isActive={drumMachine.currentStep === index}
          />
        ))}
      </div>
    </div>
  );
});

export default ChannelView;
