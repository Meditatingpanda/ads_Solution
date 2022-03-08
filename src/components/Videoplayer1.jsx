import React, { useState } from "react";
import ReactPlayer from "react-player";
let i = 0;
function Videoplayer1({v1,v_link}) {
       
  const [img, setImg] = useState(null);
  const [link, setLink] = useState(null);
  const [isVisible, setIsvisible] = useState(false);

  const handleProgress = ({ playedSeconds }) => {
    if (playedSeconds > v1[i].ad_start_time && i <v1.length  ) {
      console.log(i);
      setIsvisible(true);
      setImg(v1[i].ad_image);
      setLink(v1[i].on_click);
      if (playedSeconds > v1[i].ad_end_time) {
        setIsvisible(false);
        i++;
      }
    }
   
  };
  return (
    <div>
    <div className="max-h-[30rem] max-w-[50rem] border-none relative">
      <ReactPlayer
        height="100%"
        width="100%"
        onProgress={handleProgress}
        controls
        url={v_link}
      
      />
      {isVisible && (
        <div
          onClick={() => window.open(`${link}`, "_blank")}
          className={`cursor-pointer flex justify-center items-center bg-transparent  h-[40%] w-[30%] absolute  bottom-[35%] right-0 `}
        >
          {<img className="object-contain h-full w-full" src={img} alt="" />}
        </div>
      )}
    </div>
  </div>
  )
}

export default Videoplayer1