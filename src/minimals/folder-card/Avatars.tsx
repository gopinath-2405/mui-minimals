import { Avatar, AvatarGroup } from '@mui/material'
import _ from 'lodash'
import React from 'react'

interface Avatarstype {
  alt: string;
  image: string;
}

const avatars: Avatarstype[] = [
  {
    alt: "Reece Chung",
    image: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-5.webp"
  },
  {
    alt: 'Lainey Davidson',
    image: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-6.webp'
  },
  {
    alt: 'Cristopher Cardenas',
    image: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-7.webp'
  },
  {
    alt: 'Melanie Noble',
    image: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-8.webp'
  },
  {
    alt: 'Chase Day',
    image: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-9.webp'
  },
  {
    alt: 'Shawn Manning',
    image: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-10.webp'
  },
  {
    alt: 'Soren Durham',
    image: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-11.webp'
  },
  {
    alt: 'Cortez Herring',
    image: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-12.webp'
  },
  {
    alt: 'Amiah Pruitt',
    image: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-21.webp'
  },
  {
    alt: 'Jayvion Simon',
    image: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-1.webp'
  },
  {
    alt: 'Lucian Obrien',
    image: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp'
  },

  {
    alt: 'Deja Brady',
    image: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp'
  },
  {
    alt: 'Harrison Stein',
    image: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-4.webp'
  }
]

const Avatars = () => {
  return (
    <AvatarGroup max={4}>
      {
        _.map(avatars, (avatar, index) => (
          <Avatar alt={avatar.alt} src={avatar.image} key={index} />
        ))
      }

    </AvatarGroup>
  )
}

export default Avatars;