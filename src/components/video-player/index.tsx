import BrowserOnly from "@docusaurus/BrowserOnly"
import { memo } from "react"
import type { FC, ReactNode } from "react"

interface Itype {
  children?: ReactNode
  video: string
}

const VideoPlayer: FC<Itype> = memo(({ video }) => {
  return (
    <BrowserOnly>
      {() => {
        const Plyr = require("plyr-react").default
        return (
          <Plyr
            source={{
              type: "video",
              sources: [
                {
                  src: video,
                  type: "video/mp4"
                }
              ]
            }}
            options={{
              blankVideo: ""
            }}
          />
        )
      }}
    </BrowserOnly>
  )
})

export default VideoPlayer
