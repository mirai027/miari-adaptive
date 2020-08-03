## 起步

### rem是什么

`rem`（font size of the root element）是指相对于根元素`<html>`来做计算的字体大小单位。

e.g. 设置`html { font-size: 75px }`时，其他元素`1rem = 75px`，`4rem = 300px`

### vw是什么

`vw`是基于`viewport`视窗的长度单位。`1vw`等于`window.innerWidth`的`1%`

e.g. 设备物理宽度为`375px`时，`1vw = 3.75px`

### dpr是什么

设备像素比`device pixel ratio`简称`dpr`，即物理像素和设备独立像素的比值。

在`web`中，浏览器为我们提供了`window.devicePixelRatio`来帮助我们获取`dpr`。

`iPhone 6、7、8`的实际物理像素是`750 x 1334`，在开发者工具中我们可以看到：它的设备独立像素是`375 x 667`，设备像素比`dpr`为`2`

e.g. 如果给定一个元素的高度为`200px`(这里的`px`指物理像素，非`CSS`像素)，`iphone6`的设备像素比`dpr = 2`，我们给定的`height`应为`200px/2=100dp`。

## Flexible（前手淘做法）

js获取`clientWidth`，分成十份。再设置`rem`。字体大小则是`12 * dpr`

## postcss-px-to-viewport（有赞做法）

`postcss-px-to-viewport`的做法其实没多大不同，它直接计算每个像素在设计稿中占据的`%`来输出`vw`，`rem`

> 设计稿 = 375px时

#### 1. 转换VW方案

```json
'postcss-px-to-viewport': {
    unitToConvert: 'px', // 需要转换的单位，默认为"px"
    viewportWidth: 375, // 视窗的宽度，对应设计稿的宽度
    viewportUnit: 'vw', // 指定需要转
    fontViewportUnit: 'vw', //字体使用的视口单位
	unitPrecision: 13, // 指定`px`转换为视窗单位值的小数后 x位数
   	...
}
```

 `1px = 100 / 375 = 0.2666666666666%` 即 `100px = 26.6666666666666% = 26.6666666666666vw`

实际渲染时（375px的屏幕），`26.6666666666666vw = 26.6666666666% * 375 = 100px`

![](https://s1.ax1x.com/2020/08/03/aUYRmV.png)

在 转换成`vw`的方案设置媒体查询超出宽度范围后固定`body`宽度，内容居中时，会出现样式过大影响查看的问题。

```scss
@media screen and (min-width: 1024px) {
  html {
    max-width: 1024px;
  }
}
```

![](https://s1.ax1x.com/2020/08/03/aUdwGD.gif)



#### 2.转换REM方案

避免不同浏览器的默认字体大小不一样导致大小不一致的问题，我们需要固定好`root元素 html`的`font-size`

恰好我们可以利用`postcss-px-viewport`不支持内联样式的转换。来设置`root元素 html`的内联`font-size: 16px;`来固定`root`的字体大小以适配转换成`rem`的方案。

 `1px = 100 / 375 = 0.2666666666666%` 即 `100px = 26.6666666666666% = 26.6666666666666rem`

由于我们设置了`root元素 html`的内联`font-size: 16px;`来固定`root`的字体大小。因此，实际渲染时（375px的屏幕），容器`26.6666666666666rem = 26.6666666666666 * 16 = 426.6666666666656px`

也就是说，我们需要更改`viewportWidth`的大小来和设计图适配。直接推导一下设计图与`viewportWidth`的倍数关系 =  `426.6666666666656 / 100 = 4.26656 `倍。设置`viewportWidth: 1599.96` `（375 * 4.26656 = 1599.96）`

![](https://s1.ax1x.com/2020/08/03/aUDBkt.png)

同样设置媒体查询超出宽度范围后固定`body`宽度，内容居中

```scss
@media screen and (min-width: 1024px) {
  html {
    max-width: 1024px;
  }
}
```

![](https://s1.ax1x.com/2020/08/03/aU0BDA.gif)

## rem + vw（网易移动端做法）
