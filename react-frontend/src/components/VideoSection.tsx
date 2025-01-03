import React from 'react';

const VideoSection = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div className="row">
      <div className="col">
        <h4>Video Tutorial</h4>
        <hr />
        <iframe
          src={videoUrl}
          style={{ width: '100%', height: '300px', border: 'none' }}
          title="Video Tutorial"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
