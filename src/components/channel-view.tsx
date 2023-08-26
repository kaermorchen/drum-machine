import Channel from '../models/channel';
import StepView from './step-view';
import { observer } from 'mobx-react-lite';

interface ChannelViewProps {
  channel: Channel;
}

const ChannelView = observer(({ channel }: ChannelViewProps) => {
  return (
    <div className="flex mb-2 items-center">
      <div className="w-48 cursor-pointer">{channel.song.name}</div>
      <div className="flex">
        {channel.steps.map((step, index) => (
          <StepView step={step} channel={channel} key={index} />
        ))}
      </div>
    </div>
  );
});

export default ChannelView;
