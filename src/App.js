import { useEffect, useState } from "react";

import Videoplayer from "./components/Videoplayer";
import Videoplayer1 from "./components/Videoplayer1";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://storage.googleapis.com/publicmaxtap-prod.appspot.com/data/ads_data_assignment.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  let v1, v2, videoLink, videoLink1;
  videoLink =
    "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4";
  videoLink1 =
    "https://jsoncompare.org/LearningContainer/SampleFiles/Video/MP4/Sample-MP4-Video-File-Download.mp4";
  if (data) {
    v1 = data.filter((key) => key.video_id === "v1");

    v2 = data.filter((key) => key.video_id === "v2");
    console.table(v1, v2);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-between h-[100vh]">
        <div className="bg-slate-500 w-full h-12 text-center text-3xl text-white">
          Intutive Ads Solutions
        </div>
        <Videoplayer v1={v1} v_link={videoLink} />

        <Videoplayer1 v1={v2} v_link={videoLink1} />
      </div>
    </>
  );
}

export default App;
