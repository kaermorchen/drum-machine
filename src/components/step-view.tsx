import Channel from '../models/channel';
import Step from '../models/step';
import { observer } from 'mobx-react-lite';

interface StepViewProps {
  step: Step;
  channel: Channel;
}

const StepView = observer(({ step, channel }: StepViewProps) => {
  return (
    <div
      className={`border w-6 h-10 mr-2 cursor-pointer ${
        step.isPlaying ? 'bg-green-500' : 'bg-white'
      }`}
      onClick={() => {
        step.toggle();
        channel.song.play();
      }}
    ></div>
  );
});

export default StepView;
