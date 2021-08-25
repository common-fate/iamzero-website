import React from "react";

type AsciinemaPlayerProps = {
  src: string;
};

const AsciinemaPlayer: React.FC<AsciinemaPlayerProps> = ({ src }) => {
  return (
    // @ts-ignore
    <asciinema-player
      src={src}
      style={{ width: "100%", height: "100%" }}
      autoplay="true"
      loop="true"
    />
  );
};

export default AsciinemaPlayer;
