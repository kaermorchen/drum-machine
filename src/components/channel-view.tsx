import Channel from '../models/channel';

interface ChannelViewProps {
  channel: Channel;
}

function ChannelView({ channel }: ChannelViewProps) {
  return <div className="mb-2">{channel.song.name}</div>;
}

export default ChannelView;
