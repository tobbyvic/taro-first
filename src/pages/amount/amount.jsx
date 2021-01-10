import React, {Component} from 'react'
import {View} from '@tarojs/components'
import {AtButton, AtForm, AtInput, AtSlider, AtSwitch, AtTabBar} from 'taro-ui'

import './amount.less'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberValue: 12,
      currentNavValue: '小于36个月'
    };
  }

  // 可以使用所有的 React 组件方法
  componentDidMount() {
  }

  // onLoad
  onLoad() {
  }

  // onReady
  onReady() {
  }

  // 对应 onShow
  componentDidShow() {
  }

  // 对应 onHide
  componentDidHide() {
  }

  // 对应 onPullDownRefresh，除了 componentDidShow/componentDidHide 之外，
  // 所有页面生命周期函数名都与小程序相对应
  onPullDownRefresh() {
  }

  // 自定义函数
  handleChange(val) {
    console.log(val);
    return false
  }

  handleClick() {
    return false
  }


  render() {
    return (
      <View className='index'>
        <AtForm>

          <AtInput
            style={{"fontSize": "12px"}}
            name='numberValue'
            title='请输入还款金额'
            type='number'
            placeholder='请输入数字'
            value={this.state.numberValue}
            onChange={this.handleChange.bind(this)}
          >
            &nbsp;元&nbsp;
          </AtInput>
          <AtTabBar
            tabList={[
              {title: '小于36个月'},
              {title: '大于36个月', dot: false}
            ]}
            onClick={this.handleClick.bind(this)}
            current={this.state.current}
          />
        </AtForm>
        <AtSlider className={"amount-slider"} value={50}></AtSlider>
        <AtForm>
          <AtSwitch title='开启中' checked={this.state.value} onChange={this.handleChange}/>
          <AtSwitch title='已禁止' disabled onChange={this.handleChange}/>
        </AtForm>
        <AtButton className={"amount-btn"} type='primary'>查看图表</AtButton>
      </View>
    )
  }
}

export default Index
