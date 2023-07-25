import type { StoryFn, Meta } from '@storybook/react'
import React from 'react'
import InteractiveTable, { Props } from './components/interactive-table/InteractiveTable'
import SkeletonInteractiveTable from './components/interactive-table/SkeletonInteractiveTable'
import SkeletonThumbnail from './components/interactive-table/SkeletonThumbnail'
import Thumbnail from './components/interactive-table/Thumbnail'
import Button from './components/button/Button'
import Icon from './components/Icon'
import Checkbox from './components/checkbox/Checkbox'
import SkeletonCheckbox from './components/checkbox/SkeletonCheckbox'
import fixture from '../assets/fixture.jpg'

export default {
  title: 'Components/InteractiveTable',
  component: InteractiveTable
} as Meta

const Template: StoryFn<Props> = (args) => <InteractiveTable {...args} />
const SkeletonTemplate: StoryFn<Props> = (args) => <SkeletonInteractiveTable {...args} />

const items = [];

for (let i = 0; i < 16; i++) {
  items.push(
    <tr key={i}>
      <td>
        <Checkbox />
      </td>
      <td>
        <div className='_media'>
          <Thumbnail>
            <img src={fixture} />
          </Thumbnail>
        </div>
      </td>
      <td>公開</td>
      <td>バナナ</td>
      <td className='-align-end'>1,000</td>
      <td className='-align-end'>10</td>
      <td>
        <Button
          appearance='transparent'
          areaLabel='More'
          color='neutral'
          leading={
            <Icon className='_icon' icon='ellipsis_vertical' />
          }
          shape='circle'
          size='m'
        />
      </td>
    </tr>
  );
}

export const Index = Template.bind({})
Index.args = {
  areaLabel: 'Products',
  children: (
    <>
      <thead className='-is-sticky'>
        <tr>
          <th style={{ width: '4.5rem' }}>
            <Checkbox />
          </th>
          <th style={{ width: '5.5rem' }}></th>
          <th
            role='columnheader'
            scope='col'
            style={{ width: '6rem' }}
          >
            公開
          </th>
          <th
            role='columnheader'
            scope='col'
          >
            商品名
          </th>
          <th
            className='-is-sortable -align-end'
            role='columnheader'
            scope='col'
            style={{ width: '8rem' }}
          >
            <div className='_wrapper'>
              <div className='_container'>
                <div className='_control -order-desc'>
                  <Button
                    appearance='transparent'
                    areaLabel='Sort'
                    color='neutral'
                    leading={
                      <Icon className='_icon' icon='arrow_downward' />
                    }
                    shape='circle'
                    size='m'
                  />
                </div>
              </div>
              <div className='_container'>
                価格
              </div>
            </div>
          </th>
          <th
            className='-align-end'
            role='columnheader'
            scope='col'
            style={{ width: '8rem' }}
          >
            在庫
          </th>
          <th style={{ width: '4.5rem' }}></th>
        </tr>
      </thead>
      <tbody>
        <tr className='-is-draggable'>
          <td>
            <Icon className='_icon' icon='drag_handle' />
          </td>
          <td>
            <div className='_media'>
              <Thumbnail>
                <img src={fixture} />
              </Thumbnail>
            </div>
          </td>
          <td>非公開</td>
          <td>りんご</td>
          <td className='-align-end'>1,000</td>
          <td className='-align-end'>10</td>
          <td>
            <Button
              appearance='transparent'
              areaLabel='More'
              color='neutral'
              leading={
                <Icon className='_icon' icon='ellipsis_vertical' />
              }
              shape='circle'
              size='m'
            />
          </td>
        </tr>
        <tr className='--disabled'>
          <td>
            <Checkbox disabled />
          </td>
          <td>
            <div className='_media'>
              <Thumbnail>
                <img src={fixture} />
              </Thumbnail>
            </div>
          </td>
          <td>非公開</td>
          <td>りんご</td>
          <td className='-align-end'>1,000</td>
          <td className='-align-end'>10</td>
          <td>
            <Button
              appearance='transparent'
              areaLabel='More'
              color='neutral'
              leading={
                <Icon className='_icon' icon='ellipsis_vertical' />
              }
              shape='circle'
              size='m'
            />
          </td>
        </tr>
        <tr className='--selected'>
          <td>
            <Checkbox checked readOnly />
          </td>
          <td>
            <div className='_media'>
              <Thumbnail>
                <img src={fixture} />
              </Thumbnail>
            </div>
          </td>
          <td>非公開</td>
          <td>いちご</td>
          <td className='-align-end'>1,000</td>
          <td className='-align-end'>10</td>
          <td>
            <Button
              appearance='transparent'
              areaLabel='More'
              color='neutral'
              leading={
                <Icon className='_icon' icon='ellipsis_vertical' />
              }
              shape='circle'
              size='m'
            />
          </td>
        </tr>
        {items}
      </tbody>
    </>
  )
}

const skeletonItems = [];

for (let i = 0; i < 16; i++) {
  skeletonItems.push(
    <tr key={i}>
      <td>
        <SkeletonCheckbox />
      </td>
      <td>
        <div className='_media'>
          <SkeletonThumbnail />
        </div>
      </td>
      <td>
        <span className='_skeleton'></span>
      </td>
      <td>
        <span className='_skeleton'></span>
      </td>
      <td className='-align-end'>
        <span className='_skeleton'></span>
      </td>
      <td className='-align-end'>
        <span className='_skeleton'></span>
      </td>
      <td>
      </td>
    </tr>
  );
}

export const Skeleton = SkeletonTemplate.bind({})
Skeleton.args = {
  areaLabel: 'Products',
  children: (
    <>
      <thead className='-is-sticky'>
        <tr>
          <th style={{ width: '4.5rem' }}>
            <SkeletonCheckbox />
          </th>
          <th style={{ width: '5.5rem' }}></th>
          <th
            role='columnheader'
            scope='col'
            style={{ width: '6rem' }}
          >
            <span className='_skeleton'></span>
          </th>
          <th
            role='columnheader'
            scope='col'
          >
            <span className='_skeleton'></span>
          </th>
          <th
            className='-align-end'
            role='columnheader'
            scope='col'
            style={{ width: '8rem' }}
          >
            <span className='_skeleton'></span>
          </th>
          <th
            className='-align-end'
            role='columnheader'
            scope='col'
            style={{ width: '8rem' }}
          >
            <span className='_skeleton'></span>
          </th>
          <th style={{ width: '4.5rem' }}></th>
        </tr>
      </thead>
      <tbody>
        {skeletonItems}
      </tbody>
    </>
  )
}
