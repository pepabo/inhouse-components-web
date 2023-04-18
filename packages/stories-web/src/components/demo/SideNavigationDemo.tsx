import React, { FC, useState } from 'react'
import SideNavigation, { Props as SideNavigationProps } from '../side-navigation/SideNavigation'
import AppBar from '../AppBar'
import Avatar from '../avatar/Avatar'
import Button from '../button/Button'
import Container from '../Container'
import Icon from '../Icon'
import InteractiveList from '../interactive-list/InteractiveList'
import InteractiveListItem from '../interactive-list/InteractiveListItem'

export type Props = SideNavigationProps

const SideNavigationDemo: FC<SideNavigationProps> = () => {
  const [isActivated, setIsActivated] = useState(true)

  const handleClickButton = () => {
    setIsActivated(!isActivated)
  }

  return (
    <>
      <AppBar
        leading={
          <Button
            appearance='transparent'
            leading={
              <Icon icon='menu' />
            }
            onClick={handleClickButton}
            shape='circle'
          />
        }
        title='Side Navigation'
        titleTag='h1'
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          maxWidth: '100%',
          paddingTop: '3.5rem'
        }}
      >
        <SideNavigation
          body={
            <>
              <InteractiveList density='normal'>
                <InteractiveListItem
                  activated
                  href='#'
                  leading={
                    <Icon icon='home' />
                  }
                  leadingElement='icon'
                  title='ホーム'
                />
                <InteractiveListItem
                  href='#'
                  leading={
                    <Icon icon='magnifying_glass' />
                  }
                  leadingElement='icon'
                  title='検索'
                />
                <InteractiveListItem
                  href='#'
                  leading={
                    <Icon icon='heart' />
                  }
                  leadingElement='icon'
                  title='お気に入り'
                />
                <InteractiveListItem
                  href='#'
                  leading={
                    <Icon icon='bell' />
                  }
                  leadingElement='icon'
                  title='通知'
                />
                <InteractiveListItem
                  href='#'
                  leading={
                    <Icon icon='person' />
                  }
                  leadingElement='icon'
                  title='あなた'
                />
                <InteractiveListItem
                  href='#'
                  leading={
                    <Icon icon='gear' />
                  }
                  leadingElement='icon'
                  title='設定'
                />
              </InteractiveList>
              <InteractiveList
                density='normal'
                title='ブックマーク'
                titleTag='h2'
              >
                <InteractiveListItem
                  href='#'
                  leading={
                    <Icon icon='star' />
                  }
                  leadingElement='icon'
                  title='ブックマーク'
                />
                <InteractiveListItem
                  href='#'
                  leading={
                    <Icon icon='star' />
                  }
                  leadingElement='icon'
                  title='ブックマーク'
                />
                <InteractiveListItem
                  href='#'
                  leading={
                    <Icon icon='star' />
                  }
                  leadingElement='icon'
                  title='ブックマーク'
                />
              </InteractiveList>
            </>
          }
          header={
            <InteractiveList density='normal'>
              <InteractiveListItem
                href='#'
                leading={
                  <Avatar src='https://picsum.photos/id/177/200/300' />
                }
                leadingElement='avatar'
                title='User'
                trailing={
                  <Icon icon='arrow_drop_down' />
                }
                trailingElement='icon'
              />
            </InteractiveList>
          }
          isActivated={isActivated}
        />
        <main>
          <Container>
            <div
              style={{
                paddingTop: '1rem',
                paddingBottom: '1rem'
              }}
            >
              インターネットが好き。というより、光ファイバーが好き。人とWi-Fiが飛び交う渋谷、Bluetoothが途切れる交差点。いよいよ2020年は東京オリンピック、泣いても笑っても一発勝負。「ねぇGoogle、今夜の天気は？」降水確率が0%でも100%でも、GMOペパボ株式会社は、世界をもっとおもしろくできる。
            </div>
          </Container>
        </main>
      </div>
    </>
  )
}

export default SideNavigationDemo
