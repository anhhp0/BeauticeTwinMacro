import tw from 'twin.macro'
import React from 'react'
import ThumbnailTeamSlogan from './assets/unsplash_rE6FqsyyqwM.svg'
import TextTitle from '../textTile/Title'

const TeamSlogan: React.FC = () => {
  return (
    <div tw="container relative mx-auto">
      <img
        tw="[z-index: -10]"
        src={ThumbnailTeamSlogan}
        alt="thumbnailTeamSlogan"
      />
      <div tw="absolute w-full h-full flex justify-center items-center top-0">
        <svg
          width="100%"
          height="529"
          viewBox="0 0 1440 529"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1440" height="529" fill="#091156" fill-opacity="0.6" />
        </svg>
      </div>
      <div tw="flex flex-col gap-y-2 absolute w-full h-full flex justify-center items-center top-0">
        <TextTitle variant="sloganWhite" tw="[text-align: center]">
          Customer satisfaction is<br/> our main goal
        </TextTitle>
        <TextTitle variant="lightGrayDesc" tw="[text-align: center]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          <br />
          purus sit amet luctus venenatis
        </TextTitle>
      </div>
    </div>
  )
}
export default TeamSlogan
