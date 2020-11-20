import {base} from "./base";
import {order} from "./order";

//当前页面的渲染 是按照 这个数据的顺序来的
// 如果希望 自定义渲染顺序 添加一个位置标识符和一套 位置规则

// 考虑当前=

const menuList = [
    ...base,
    ...order
];
export default menuList

