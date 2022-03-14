/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react';
import { CardWrapper, CardItem, CardName, CardDescription, CardDemo, CardGithub } from './Cards.style';
import test from '../../assets/test.jpeg';
import Image from 'next/image'

type TextColor = 'primary' | 'secondary' | 'purple' | 'green' | 'bg'
type TextSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl' | 'xxxl'
type TextFamily = 'body' | 'title'
export interface CardsProps {
  children: ReactNode
  color?: TextColor
  weight?: string
  size?: TextSize
  font?: TextFamily
  borderColor?: TextColor
}

const Cards = ({ children, color = 'secondary', weight = 'normal', size = 'lg', font = 'body' }: CardsProps) => (
  <CardWrapper color='primary' weight='700' size='xxl' font={font}>
    <CardItem color='primary' weight='700' size='xxl' font={font}>
      <Image src={test} alt="Image" height="350" layout="responsive" sizes="100vw" objectFit="cover" />
      <CardName color='primary' weight='500' size='xl' font='title'>Nome do projeto 1</CardName>
      <CardDescription color='secondary' weight={weight} size='lg' font={font}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis ligula, accumsan nec cursus in, eleifend sit amet dui.</CardDescription>
      <CardDemo href="http://" target="_blank" rel="noopener noreferrer" color='bg' weight='200' size='default' font={font}>Demo</CardDemo>
      <CardGithub href="http://" target="_blank" rel="noopener noreferrer" color='primary' weight='200' size='default' font={font}>Github</CardGithub>
    </CardItem>
  </CardWrapper>
);

export { Cards };
