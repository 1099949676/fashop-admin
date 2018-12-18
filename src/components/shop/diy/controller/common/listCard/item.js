import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import UploadImage from "@/components/uploadImage";
import { formItemLayout } from "@/components/shop/diy/formLayout";
import ActionLink from "@/components/shop/diy/controller/common/actionLink";
import ColorPicker from "@/components/public/colorPicker";
import styles from "./index.css";

// 返回组内一条的数据格式
const _response = {
    title: "",
    img: {
        url: ""
    },
    link: {
        action: "portal",
        param: {}
    },
    background_color: "#FFFFFF",
    font_color: "#333333"
};
export default class Item extends PureComponent {
    static propTypes = {
        title: PropTypes.object,
        img: PropTypes.object,
        link: PropTypes.object,
        backgroundColor: PropTypes.object,
        fontColor: PropTypes.object,
        onChange: PropTypes.func.isRequired
    };
    // 传值、返回的值根据后端接口返回规律进行正确返回，临时解决方案
    //     title:''
    // img: {
    //     url: ''
    // },
    //     link:{
    //         action: 'portal',
    //         param: {}
    //     }
    // backgroundColor: '#FFFFFF'},
    // fontColor:'#333333},
    static defaultProps = {
        title: null,
        img: null,
        link: null,
        backgroundColor: null,
        fontColor: null,
        onChange: (data) => {
        }
    };
    state = {
        response: _response
    };

    constructor(props) {
        super(props);
        let __response = _response;
        const { title, img, link, backgroundColor, fontColor } = this.props;
        if (!title) {
            delete __response["title"];
        }
        if (!img) {
            delete __response["img"];
        }
        if (!link) {
            delete __response["link"];
        }
        if (!backgroundColor) {
            delete __response["background_color"];
        }
        if (!fontColor) {
            delete __response["font_color"];
        }
        this.state = {
            response: __response
        };
    }

    render() {
        const { title, img, link, backgroundColor, fontColor } = this.props;
        return <div className={styles.itemBot}>
            {img ? <div className={styles.itemLeft}>
                <UploadImage
                    onChange={(e) => {
                        this.setResponse("img", { url: e });
                    }}
                    is_save={1}
                >
                    {
                        img.url.length ?
                            <img
                                src={img.url}
                                alt=''
                                style={{ width: "80px" }}
                            /> :
                            <View className={styles.uploadBtn}>
                                <Icon type='plus' />
                                <p>上传图标</p>
                            </View>
                    }
                </UploadImage>
            </div> : null}
            <View className={styles.itemRight}>
                {title ? <FormItem
                    {...formItemLayout}
                    label="标题"
                >
                    <Input
                        style={{ width: 240 }}
                        placeholder='标题必填'
                        value={listItem.title}
                        onChange={(e) => {
                            this.setResponse("title", e.target.value);
                        }}
                    />
                </FormItem> : null}
                {link ? <FormItem
                    {...formItemLayout}
                    label="链接"
                >
                    <ActionLink
                        type={listItem.link.action}
                        selectGoodsVisible={false}
                        selectPageVisible={false}
                        inputUrlVisible={false}
                        onChange={(state) => {
                            this.setResponse("link", {
                                action: state.type,
                                param: state.value
                            });
                        }}
                        value={() => {
                            switch (link.action) {
                                case "portal":
                                    return;
                                case "goods":
                                    return link.param;
                                case "page":
                                    return link.param;
                                case "url":
                                    return link.param;
                            }
                        }}
                    />
                </FormItem> : null}
                {backgroundColor ? <FormItem
                    {...formItemLayout}
                    label="背景颜色"
                >
                    <ColorPicker
                        color={backgroundColor.background_color}
                        colorChange={(color) => {
                            this.setResponse("background_color", color.hex);
                        }}
                    />
                </FormItem> : null}
                {fontColor ? <FormItem
                    {...formItemLayout}
                    label="文字颜色"
                >
                    <ColorPicker
                        color={fontColor.background_color}
                        colorChange={(color) => {
                            this.setResponse("font_color", color.hex);
                        }}
                    />
                </FormItem> : null}
            </View>
        </div>;
    }

    setResponse(field, value) {
        const { onChange } = this.props;
        let response = this.state.response;
        response[field] = value;
        onChange(response);
    }
}
