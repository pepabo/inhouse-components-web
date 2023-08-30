import React, { FC, useState } from 'react'
import NavigationDrawer, { Props as NavigationDrawerProps } from '../navigation-drawer/NavigationDrawer'
import NavigationDrawerHeader from '../navigation-drawer/NavigationDrawerHeader'
import NavigationDrawerBody from '../navigation-drawer/NavigationDrawerBody'
import NavigationDrawerScrim from '../navigation-drawer/NavigationDrawerScrim'
import AppBar from '../AppBar'
import Button from '../button/Button'
import Container from '../Container'
import Icon from '../Icon'
import InteractiveList from '../interactive-list/InteractiveList'
import InteractiveListItem from '../interactive-list/InteractiveListItem'

export type Props = NavigationDrawerProps

const SideNavigationDemo: FC<Props> = (props: Props) => {
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
        title='Navigation Drawer'
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
          <NavigationDrawer
            bodies={[
              <NavigationDrawerBody
                isActivated
                key={0}
              >
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
              </NavigationDrawerBody>
            ]}
            headers={[
              <NavigationDrawerHeader
                isActivated
                key={0}
                leading={
                  <Button
                    appearance='transparent'
                    leading={<Icon icon='cross' />}
                    onClick={handleClickButton}
                    shape='circle'
                  />
                }
                title='Navigation'
                titleTag='h2'
              />
            ]}
            isActivated={isActivated}
            layer={props.layer}
            scrim={
              <NavigationDrawerScrim
                onClick={handleClickButton}
              />
            }
          />
        </main>
      </div>
    </>
  )
}

export default SideNavigationDemo
