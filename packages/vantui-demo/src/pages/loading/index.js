import { Block } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import { Loading } from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }
  state = {}

  render() {
    return (
      <Block>
        <DemoBlock title="加载类型" padding>
          <Loading className="demo-loading"></Loading>
          <Loading className="demo-loading" type="spinner"></Loading>
        </DemoBlock>
        <DemoBlock title="自定义颜色" padding>
          <Loading className="demo-loading" color="#1989fa"></Loading>
          <Loading
            className="demo-loading"
            type="spinner"
            color="#1989fa"
          ></Loading>
        </DemoBlock>
        <DemoBlock title="加载文案" padding>
          <Loading className="demo-loading" size="24px">
            加载中...
          </Loading>
        </DemoBlock>
        <DemoBlock title="垂直排列" padding>
          <Loading className="demo-loading" size="24px" vertical>
            加载中...
          </Loading>
        </DemoBlock>
      </Block>
    )
  }
}
