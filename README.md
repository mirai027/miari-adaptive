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

## Flexible



## postcss-px-to-viewport



## rem + vw