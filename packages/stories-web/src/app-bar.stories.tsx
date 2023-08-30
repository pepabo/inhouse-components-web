import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import AppBar, { Props } from './components/AppBar'
import Button from './components/button/Button'
import Icon from './components/Icon'
import TextField from './components/TextField'

export default {
  title: 'Components/AppBar',
  component: AppBar,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const Template: StoryFn<Props> = (args) => <AppBar {...args} />

export const Tool = Template.bind({})
Tool.args = {
  appearance: 'white',
  brightness: 'light',
  leading:
    <Button
      appearance='transparent'
      areaLabel='More'
      key='4'
      leading={
        <Icon
          className='_icon'
          icon='menu'
        />
      }
      shape='circle'
    />,
  position: 'fixed',
  title: 'Tool',
  titleTag: 'h1',
  trailing: [
    <TextField
      icon={
        <Icon
          className='_icon'
          icon='magnifying_glass'
        />
      }
      iconPosition='before'
      key='1'
      placeholder='Search'
    />,
    <Button
      appearance='transparent'
      areaLabel='Filter'
      key='2'
      leading={
        <Icon
          className='_icon'
          icon='funnel'
        />
      }
      shape='circle'
    />,
    <Button
      appearance='transparent'
      areaLabel='Share'
      key='3'
      leading={
        <Icon
          className='_icon'
          icon='node'
        />
      }
      shape='circle'
    />,
    <Button
      appearance='transparent'
      areaLabel='More'
      key='4'
      leading={
        <Icon
          className='_icon'
          icon='ellipsis_vertical'
        />
      }
      shape='circle'
    />,
  ],
  trailingElement: 'action'
}

export const Contents = Template.bind({})
Contents.args = {
  appearance: 'white',
  brightness: 'light',
  leading:
    <Button
      appearance='transparent'
      areaLabel='More'
      key='4'
      leading={
        <Icon
          className='_icon'
          icon='menu'
        />
      }
      shape='circle'
    />,
  position: 'fixed',
  title: <a href="#">Contents</a>,
  titleTag: 'h1',
  trailing: [
    <Button
      appearance='transparent'
      body='Foundation'
      key='2'
    />,
    <Button
      appearance='transparent'
      body='Design system'
      key='3'
    />,
  ],
  trailingElement: 'navigation'
}

export const Logo = Template.bind({})
Logo.args = {
  appearance: 'white',
  brightness: 'light',
  leading:
    <Button
      appearance='transparent'
      areaLabel='More'
      key='4'
      leading={
        <Icon
          className='_icon'
          icon='menu'
        />
      }
      shape='circle'
    />,
  position: 'fixed',
  title:
    <a href="#">
      <svg id="logo" x="0px" y="0px" width="240" height="24" viewBox="0 0 240 24">
        <title>GMOペパボ株式会社 ホーム</title>
        <clipPath id="a">
          <path d="m0 .0993h240v23.8014h-240z"></path>
        </clipPath>
        <g clipPath="url(#a)">
          <g clipPath="url(#a)">
            <path d="m58.2209 22.029h1.5815a.28.28 0 0 0 .2187-.1247l6.5347-10.6976 3.5534 12.2393a.2.2 0 0 0 .1847.14h6.86a.0981.0981 0 0 0 .1025-.1339l-7.2341-22.9033a.214.214 0 0 0 -.1906-.1388h-2.5752a.2878.2878 0 0 0 -.2242.1247l-8.8114 13.657-8.8093-13.6575a.2929.2929 0 0 0 -.2254-.1242h-2.5753a.214.214 0 0 0 -.19.1393l-7.233 22.903a.0974.0974 0 0 0 .0529.1273.0984.0984 0 0 0 .05.0066h6.8575a.1982.1982 0 0 0 .1856-.14l3.5539-12.2393 6.535 10.6976a.2772.2772 0 0 0 .2192.1247z" fill="#005aac"></path>
            <path d="m39.5 10.6231v-.0055a.1491.1491 0 0 0 -.144-.115h-19.539a1.8725 1.8725 0 0 0 0 3.7445h11.6108c-1.3829 3.6537-6.061 6.3385-11.6108 6.3385-6.6442 0-12.0277-3.8435-12.0277-8.5859s5.3835-8.5897 12.0277-8.5897a14.3876 14.3876 0 0 1 9.0843 2.9652.08.08 0 0 1 .0227.02.138.138 0 0 0 .0806.0193h7.9843a.1463.1463 0 0 0 .1465-.1444.1314.1314 0 0 0 -.0344-.09c-.0046-.01-.0105-.01-.0118-.0151-3.4006-3.6245-9.8592-6.0645-17.2722-6.0645-10.9445 0-19.817 5.3268-19.817 11.8995 0 6.5742 8.8725 11.9006 19.817 11.9006 10.9416 0 19.813-5.3264 19.813-11.9006a7.4027 7.4027 0 0 0 -.13-1.3766" fill="#005aac"></path>
            <path d="m96.6261.1c-10.9425 0-19.8126 5.327-19.8126 11.9s8.87 11.9 19.8126 11.9 19.8172-5.3256 19.8172-11.9-8.8733-11.9-19.8172-11.9m0 20.4864c-6.64 0-12.0252-3.8439-12.0252-8.5859s5.3856-8.5914 12.0252-8.5914c6.6446 0 12.0311 3.849 12.0311 8.5914s-5.3864 8.5859-12.0311 8.5859" fill="#005aac"></path>
            <g fill="#393c41">
              <path d="m199.98 23.2171a.339.339 0 0 0 .3081.3674c.0112.001.0224.0014.0337.0013h4.1382a.4065.4065 0 0 0 .3976-.3687l.7112-9.4759a.34.34 0 0 0 -.31-.3679c-.0111-.0009-.0221-.0013-.0332-.0012h-4.1374a.4074.4074 0 0 0 -.3989.3691z"></path>
              <path d="m223.9283 13.372a.3381.3381 0 0 0 -.3431.333.355.355 0 0 0 .0013.0357l.7179 9.4768a.4062.4062 0 0 0 .398.3686h4.1376c.204 0 .5907-.1658.5756-.3686l-.9518-9.4768a.4068.4068 0 0 0 -.3988-.3687z"></path>
              <path d="m228.3271 8.6785a.3712.3712 0 0 0 .37-.37v-3.9823a.3714.3714 0 0 0 -.37-.37h-11.0647a.37.37 0 0 1 -.37-.3695v-2.8076a.3716.3716 0 0 0 -.37-.37h-3.9833a.371.371 0 0 0 -.3695.37v2.8078a.3707.3707 0 0 1 -.37.3695h-10.9856a.371.371 0 0 0 -.37.37v3.9823a.3707.3707 0 0 0 .37.37h10.986a.3707.3707 0 0 1 .37.37v14.168a.3708.3708 0 0 0 .3695.37h3.9833a.3715.3715 0 0 0 .37-.37v-14.1682a.37.37 0 0 1 .37-.37z"></path>
              <path d="m122.5775 16.6069a.25.25 0 0 0 0 .3522l2.9862 2.9867a.251.251 0 0 0 .3527 0l10.8265-10.8258a.2492.2492 0 0 1 .3525 0l14.1396 14.1647a.25.25 0 0 0 .3523 0l2.9867-2.9867a.2512.2512 0 0 0 0-.3522l-17.475-17.5073a.25.25 0 0 0 -.3523-.0009z"></path>
              <path d="m162.4671 23.3385a.2152.2152 0 0 0 .2187.2473h4.5875a.288.288 0 0 0 .2787-.2473l2.4812-20.6275a.2155.2155 0 0 0 -.1815-.245.2254.2254 0 0 0 -.0376-.0023h-4.5879a.2889.2889 0 0 0 -.2788.2473z"></path>
              <path d="m181.0511 2.4636a.2161.2161 0 0 0 -.2192.2473l2.5031 20.628a.2894.2894 0 0 0 .2791.2476h4.5877a.2171.2171 0 0 0 .2221-.212.2121.2121 0 0 0 -.0021-.0356l-2.5039-20.628a.29.29 0 0 0 -.2792-.2473z"></path>
            </g>
            <rect fill="#1f7acc" height="6.1908" rx=".3699" width="3.5451" x="231.0067" y=".0995"></rect>
            <rect fill="#1f7acc" height="6.1908" rx=".3699" width="3.5454" x="236.4543" y=".0995"></rect>
            <path d="m151.5724 7.0767a3.4888 3.4888 0 1 0 -.0009 0z" fill="#1f7acc"></path>
            <path d="m192.6485.1a3.4888 3.4888 0 1 0 3.4883 3.4892v-.0012a3.4887 3.4887 0 0 0 -3.4883-3.488" fill="#1f7acc"></path>
          </g>
        </g>
      </svg>
    </a>,
  titleTag: 'h1',
  trailing: [
    <Button
      appearance='transparent'
      body='企業情報'
      key='2'
    />,
    <Button
      appearance='transparent'
      body='ニュース'
      key='3'
    />,
  ],
  trailingElement: 'navigation'
}
