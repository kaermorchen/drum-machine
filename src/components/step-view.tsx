import Channel from '../models/channel';
import Step from '../models/step';
import { observer } from 'mobx-react-lite';

interface StepViewProps {
  step: Step;
  channel: Channel;
  isActive: boolean;
}

const StepView = observer(({ step, channel, isActive }: StepViewProps) => {
  return (
    <div
      className={`border w-6 h-10 mr-2 cursor-pointer ${
        step.isPlaying ? 'bg-green-500' : 'bg-white'
      } ${isActive ? 'border-red-600' : ''}`}
      onClick={() => {
        step.toggle();
        channel.song.play();
      }}
    ></div>
  );
});

export default StepView;
