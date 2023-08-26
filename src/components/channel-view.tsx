import Channel from '../models/channel';

interface ChannelViewProps {
  channel: Channel;
}

function ChannelView({ channel }: ChannelViewProps) {
  return (
    <div className="mb-2" onClick={channel.song.play}>
      {channel.song.name}
    </div>
  );
}

export default ChannelView;
