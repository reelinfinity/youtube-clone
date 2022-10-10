import React, { useRef } from "react";
import { View, Text } from "react-native";
import { Video } from "expo-av";

interface VideoPlayerProps {
  videoURI: string;
  thumbnailURI: string;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { videoURI, thumbnailURI } = props;
  const onRefAssign = (videoElement) => {
    console.warn("video is mounted!");
  };
  return (
    <View>
      <Video ref={onRefAssign} />
    </View>
  );
};

export default VideoPlayer;
