import React, { Component } from "react";
import styles from "./index.css";
import Image from "@/components/image/index";
import { View } from "@/components/flexView";
import { Button, Carousel } from "antd";
//
// type Props = {
//     data: GoodsDataType,
//     options: GoodsOptionsType
// }
// type State = {}
export default class Index extends Component  {
    render() {
        const { data, options } = this.props
        const { layout_type } = options
        return (
            <div className={styles.goodsPhoneWarp}>
                {
                    layout_type===5 ? this.carousel(data) :
                    data.map((item, index) => {
                        if (layout_type === 1) {
                            return this.big(item, index)
                        } else if (layout_type === 2) {
                            return this.small(item, index)
                        // } else if (layout_type === 3) {
                        //     return this.oneBigTwoSmall(item, index)
                        } else if (layout_type === 4) {
                            return this.list(item, index)
                        }
                    })
                }
            </div>
        )
    }
// : {
//     img: string,
//     title: string,
//     market_price: number,
//     price: number,
// }
    small(item, index) {
        const imgWidth = (375 - 18 - 2) / 2 + 'px'
        return (
            <View
                className={styles.smallWarp}
                key={index}
                style={{ width: imgWidth, marginRight: index % 2 === 0 ? '6px' : 0 }}
            >
                <View className={styles.smallImgWarp}>
                    <Image
                        src={item.img}
                        style={{ width: imgWidth, height: imgWidth }}
                    />
                </View>
                <View className={styles.smallBot}>
                    <p className={styles.smallTitle}>{item.title}</p>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <p className={styles.smallPrice} style={{ fontSize: 14 }}>
                                2人团 ￥
                            </p>
                            <p className={styles.smallPrice}>
                                {item.price}
                            </p>
                        </View>
                        <p className={styles.smallPrice} style={{ fontSize: 14, color: '#999' }}>
                            已拼888件
                        </p>
                    </View>
                </View>
            </View>
        )
    }
// : {
//     img: string,
//     title: string,
//     market_price: number,
//     price: number,
// }
    big(item, index) {
        return (
            <View
                className={styles.bigWarp}
                key={index}
            >
                <View className={styles.smallImgWarp}>
                    <Image
                        src={item.img}
                    />
                </View>
                <View className={styles.smallBot}>
                    <p className={styles.smallTitle}>{item.title}</p>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <View style={{flexDirection: 'row', alignItems: 'center',}}>
                            <p className={styles.smallPrice} style={{fontSize: 14}}>
                                2人团 ￥
                            </p>
                            <p className={styles.smallPrice}>
                                {item.price}
                            </p>
                        </View>
                        <p className={styles.smallPrice} style={{fontSize: 14, color: '#999'}}>
                            已拼888件
                        </p>
                    </View>
                </View>
            </View>
        )
    }
// : {
//     img: string,
//     title: string,
//     market_price: number,
//     price: number,
// }
    oneBigTwoSmall(item, index) {
        const imgWidth = (375 - 18 - 2) / 2 + 'px'
        return (
            <View
                key={index}
                style={{
                    width: `${
                        (index + 1) % 3 === 0 || (index + 1) % 3 === 2 ? imgWidth : '100%'
                        }`,
                    marginRight: `${
                        (index + 1) % 3 === 2 ? '6px' : '0'
                        }`
                }}
            >
                <View className={styles.smallImgWarp}>
                    <Image
                        src={item.img}
                        style={{
                            width: `${
                                (index + 1) % 3 === 0 || (index + 1) % 3 === 2 ? imgWidth : '100%'
                                }`,
                            height: `${
                                (index + 1) % 3 === 0 || (index + 1) % 3 === 2 ? imgWidth : 'auto'
                                }`,
                        }}
                    />
                </View>
                <View className={styles.smallBot}>
                    <p className={styles.smallTitle}>{item.title}</p>
                    <p className={styles.smallPrice}>
                        {/*<span>￥{item.market_price}</span>*/}
                        ￥{item.price}
                    </p>
                </View>
            </View>
        )
    }
    // item: {
    //     img: string,
    //     title: string,
    //     market_price: number,
    //     price: number,
    // }
    list(item, index) {
        return (
            <View
                className={styles.listWarp}
                key={index}
            >
                <View className={styles.listImgWarp}>
                    <Image
                        src={item.img}
                    />
                </View>
                <View className={styles.listRight}>
                    <p className={styles.listTitle}>{item.title}</p>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <View>
                            <p className={styles.smallPrice} style={{ fontSize: 14, color: '#999' }}>
                                2人团 已拼888件
                            </p>
                            <p className={styles.listPrice}>
                                ￥{item.price}
                                <span className={styles.marketPrice}>￥{item.market_price}</span>
                            </p>
                        </View>
                        <Button type="primary">去开团</Button>
                    </View>
                </View>
            </View>
        )
    }
    carousel(data) {
        // 三个一组
        let result = [];
        for (var i = 0, len = data.length; i < len; i += 3) {
            result.push(data.slice(i, i + 3));
        }
        // console.log(result);
        return (
            <Carousel afterChange={()=>{}} dots={true}>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        )
        // return (
        //     <Carousel>
        //         {
        //             result.map((item,i)=>{
        //                 if (i < 3) {
        //                     return (
        //                         <View key={i} style={{height: 376}}>
        //                             {
        //                                 item.map((childItem, j) => {
        //                                     return (
        //                                         <View key={j}>
        //                                             <View className={styles.listImgWarp}>
        //                                                 <Image
        //                                                     src={childItem.img}
        //                                                 />
        //                                             </View>
        //                                             <View className={styles.listRight}>
        //                                                 <p className={styles.listTitle}>{childItem.title}</p>
        //                                                 <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
        //                                                     <View>
        //                                                         <p className={styles.smallPrice} style={{ fontSize: 14, color: '#999' }}>
        //                                                             2人团 已拼888件
        //                                                         </p>
        //                                                         <p className={styles.listPrice}>
        //                                                             ￥{childItem.price}
        //                                                             <span className={styles.marketPrice}>￥{childItem.market_price}</span>
        //                                                         </p>
        //                                                     </View>
        //                                                     <Button type="primary">去开团</Button>
        //                                                 </View>
        //                                             </View>
        //                                         </View>
        //                                     )
        //                                 })
        //                             }
        //                         </View>
        //                     )
        //                 }
        //             })
        //         }
        //     </Carousel>
        // )
    }
}