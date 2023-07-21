import React from 'react'
import { LuckyWheel, LuckyGrid, SlotMachine } from '@lucky-canvas/taro/react'
import { Button, Text, View } from '@tarojs/components'

import slotbg from '../../images/slotBg.png'

export default class Index extends React.Component {
    state = {
        luckyWheel: {
            blocks: [{ padding: '13px', background: '#617df2' }],
            prizes: [
                { fonts: [{ text: '0', top: '10%' }], background: '#e9e8fe' },
                { fonts: [{ text: '1', top: '10%' }], background: '#b8c5f2' },
                { fonts: [{ text: '2', top: '10%' }], background: '#e9e8fe' },
                { fonts: [{ text: '3', top: '10%' }], background: '#b8c5f2' },
                { fonts: [{ text: '4', top: '10%' }], background: '#e9e8fe' },
                { fonts: [{ text: '5', top: '10%' }], background: '#b8c5f2' },
            ],
            buttons: [
                { radius: '50px', background: '#617df2' },
                { radius: '45px', background: '#afc8ff' },
                {
                    radius: '40px', background: '#869cfa',
                    pointer: true,
                    fonts: [{ text: '开始\n抽奖', top: '-20px' }]
                },
            ],
        },
        luckyGrid: {
            blocks: [
                { padding: '10px', background: '#869cfa' },
                { padding: '10px', background: '#e9e8fe' },
            ],
            prizes: [
                { x: 0, y: 0, range: 30, fonts: [{ text: '1', top: '30px' }] },
                { x: 1, y: 0, range: 20, fonts: [{ text: '2', top: '30px' }] },
                { x: 2, y: 0, range: 15, fonts: [{ text: '3', top: '30px' }] },
                { x: 2, y: 1, range: 10, fonts: [{ text: '4', top: '30px' }] },
                { x: 1, y: 1, range: 5, fonts: [{ text: '5', top: '30px' }] },
                { x: 0, y: 1, range: 10, fonts: [{ text: '6', top: '30px' }] },
            ],
            buttons: [
                {
                    x: 0, y: 2, col: 1,
                    background: '#7f95d1',
                    fonts: [{ text: '单抽', top: '30px' }],
                    callback: function () {
                        alert('hello')
                    }
                },
                {
                    x: 2, y: 2, col: 1,
                    background: '#7f95d1',
                    fonts: [{ text: '十连抽', top: '30px' }],
                    callback: function () {
                        alert('world')
                    }
                },
            ],
        },
        slotMachine: {
            blocks: [{
                padding: '10px',
                background: '#869cfa',
                imgs: [{
                    src: slotbg,
                    width: '100%',
                    height: '100%'
                }]
            }],
            prizes: [
                { x: 0, y: 0, fonts: [{ text: '0', top: '15%' }] },
                { fonts: [{ text: '1', top: '15%' }] },
                { fonts: [{ text: '2', top: '15%' }] },
                { fonts: [{ text: '3', top: '15%' }] },
                { fonts: [{ text: '4', top: '15%' }] },
                { fonts: [{ text: '5', top: '15%' }] },
                { fonts: [{ text: '6', top: '15%' }] },
                { fonts: [{ text: '7', top: '15%' }] },
                { fonts: [{ text: '8', top: '15%' }] },
                { fonts: [{ text: '9', top: '15%' }] },
            ],
            slots: [
                { order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], direction: 1 },
                { order: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], direction: -1 },
                { order: [2, 3, 4, 5, 6, 7, 8, 9, 0, 1], direction: 1 },
            ],
        }

    }

    myLucky = React.createRef<any>()
    myLucky1 = React.createRef<any>()
    myLucky2 = React.createRef<any>()

    onStart = () => { // 点击抽奖按钮会触发star回调
        // 调用抽奖组件的play方法开始游戏
        this.myLucky2.current.play()
        // 模拟调用接口异步抽奖
        setTimeout(() => {
            // 假设后端返回的中奖索引是0
            const index = 0
            // 调用stop停止旋转并传递中奖索引
            this.myLucky2.current.stop(index)
        }, 2500)
    }

    render() {
        return <View>
            <View><Text>来抽个奖吧</Text></View>
            {/* 大转盘抽奖 */}
            <LuckyWheel
              ref={this.myLucky}
              width='300px'
              height='300px'
              blocks={this.state.luckyWheel.blocks}
              prizes={this.state.luckyWheel.prizes}
              buttons={this.state.luckyWheel.buttons}
              onStart={() => { // 点击抽奖按钮会触发star回调
                    // 调用抽奖组件的play方法开始游戏
                    this.myLucky.current.play()
                    // 模拟调用接口异步抽奖
                    setTimeout(() => {
                        // 假设后端返回的中奖索引是0
                        const index = 0
                        // 调用stop停止旋转并传递中奖索引
                        this.myLucky.current.stop(index)
                    }, 2500)
                }}
              onEnd={prize => { // 抽奖结束会触发end回调
                    console.log(prize)
                }}
            ></LuckyWheel>
            {/* 九宫格抽奖 */}
            <LuckyGrid ref={this.myLucky1}
              width='300px'
              height='300px'
              blocks={this.state.luckyGrid.blocks}
              prizes={this.state.luckyGrid.prizes}
              buttons={this.state.luckyGrid.buttons}
              onStart={() => { // 点击抽奖按钮会触发star回调
                    // 调用抽奖组件的play方法开始游戏
                    this.myLucky1.current.play()
                    // 模拟调用接口异步抽奖
                    setTimeout(() => {
                        // 假设后端返回的中奖索引是0
                        const index = 0
                        // 调用stop停止旋转并传递中奖索引
                        this.myLucky1.current.stop(index)
                    }, 2500)
                }}
              onEnd={prize => { // 抽奖结束会触发end回调
                    console.log(prize)
                }}
            />
            {/* 老虎机抽奖 */}
            <SlotMachine ref={this.myLucky2}
              width='300px'
              height='180px'
              blocks={this.state.slotMachine.blocks}
              prizes={this.state.slotMachine.prizes}
              onStart={this.onStart}
              onEnd={prize => { // 抽奖结束会触发end回调
                    console.log(prize)
                }}
            />
            <Button onClick={this.onStart}>开始抽奖</Button>
        </View>
    }
}