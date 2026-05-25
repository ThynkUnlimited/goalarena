import { useEffect, useState } from "react"

import {
  getMatchHighlights
} from "../services/footballApi"

function Highlights() {

  const [videos, setVideos] = useState([])

  useEffect(() => {

    async function fetchHighlights() {

      const data =
        await getMatchHighlights()

      setVideos(data)
    }

    fetchHighlights()

  }, [])

  return (
    <div className="mt-14">

      <h2 className="text-3xl font-bold text-green-500 mb-8">
        📺 Match Highlights
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {videos.map((video, index) => (

          <div
            key={index}
            className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800"
          >

            <iframe
              className="w-full h-[220px]"
              src={video.video}
              title={video.title}
              allowFullScreen
            />

            <div className="p-4">

              <h3 className="font-bold text-lg">
                {video.title}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Highlights