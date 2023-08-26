import Channel from '../models/channel';
import StepView from './step-view';

interface ChannelViewProps {
  channel: Channel;
}

function ChannelView({ channel }: ChannelViewProps) {
  return (
    <div className='flex'>
      <div onClick={channel.song.play}>{channel.song.name}</div>
      <div className="flex">
        {channel.steps.map((step, index) => (
          <StepView step={step} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ChannelView;
