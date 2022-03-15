/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react';
import { CardWrapper, CardItem, CardName, CardDescription, CardDemo, CardGithub, CardImage } from './Cards.style';
import loki from '../../assets/watch-loki.png';
import Image from 'next/image'

const cardInfos = [
  {
    id: 1,
    image: `${loki}`,
    title: "Watch Loki",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.",
    demo: "Nome do produto 1",
    gitbub: "Nome do produto 1",
  },
  {
    id: 2,
    image: `${loki}`,
    title: "Nome do produto 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.",
    demo: "Nome do produto 2",
    gitbub: "Nome do produto 2",
  }
];

const Cards = () => {
  return (
  <CardWrapper>
    {cardInfos.map((card) => 
      (
        <CardItem key={card.id}>
          <CardImage>
            <Image src={loki} alt="Image" className="card-image" layout="fill" objectFit="cover" />
          </CardImage>
          <CardName>{card.title}</CardName>
          <CardDescription>{card.description}</CardDescription>
          <CardDemo href="{card.demo}" target="_blank" rel="noopener noreferrer" color='bg'>Demo</CardDemo>
          <CardGithub href="{card.github}" target="_blank" rel="noopener noreferrer">Github</CardGithub>
        </CardItem>
      )
    )}
  </CardWrapper>
  )
}

export { Cards };
