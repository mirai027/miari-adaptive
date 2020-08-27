# 自适应布局方案

一套代码对应一份设计稿，实现向上/向下兼容自适应布局方案对比

> 这里只做最表面的使用方法不对，不进行多种环境（复杂布局等）的测试，内容仅供参考。
>
> 
>
> 后续会对每一个方案做进一步的研究。你问我什么时候？下次一定！👾

## 起步

### rem 是什么

`rem`（font size of the root element）是指相对于根元素`<html>`来做计算的字体大小单位。

e.g. 设置`html { font-size: 75px }`时，其他元素`1rem = 75px`，`4rem = 300px`

### vw 是什么

`vw`是基于`viewport`视窗的长度单位。`1vw`等于`window.innerWidth`的`1%`

e.g. 设备物理宽度为`375px`时，`1vw = 3.75px`

### dpr 是什么

设备像素比`device pixel ratio`简称`dpr`，即物理像素和设备独立像素的比值。

在`web`中，浏览器为我们提供了`window.devicePixelRatio`来帮助我们获取`dpr`。

`iPhone 6、7、8`的实际物理像素是`750 x 1334`，在开发者工具中我们可以看到：它的设备独立像素是`375 x 667`，设备像素比`dpr`为`2`

e.g. 如果给定一个元素的高度为`200px`(这里的`px`指物理像素，非`CSS`像素)，`iphone6`的设备像素比`dpr = 2`，我们给定的`height`应为`200px/2=100dp`。

## Flexible（前手淘做法）

js 获取`clientWidth`，分成十份。再设置`rem`。字体大小则是`12 * dpr`

## postcss-px-to-viewport（有赞做法）

`postcss-px-to-viewport`的做法其实没多大不同，它直接计算每个像素在设计稿中占据的`%`来输出`vw`，`rem`

> 设计稿 = 375px 时

#### 1. 转换 VW 方案

```js
'postcss-px-to-viewport': {
    unitToConvert: 'px', // 需要转换的单位，默认为"px"
    viewportWidth: 375, // 视窗的宽度，对应设计稿的宽度
    viewportUnit: 'vw', // 指定需要转
    fontViewportUnit: 'vw', // 字体使用的视口单位
    unitPrecision: 13 // 指定`px`转换为视窗单位值的小数后 x位数
   	...
}
```

`1px = 100 / 375 = 0.2666666666666%` 即 `100px = 26.6666666666666% = 26.6666666666666vw`

实际渲染时（375px 的屏幕），`26.6666666666666vw = 26.6666666666% * 375 = 100px`

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

#### 2.转换 REM 方案

避免不同浏览器的默认字体大小不一样导致大小不一致的问题，我们需要固定好`root元素 html`的`font-size`

恰好我们可以利用`postcss-px-viewport`不支持内联样式的转换。来设置`root元素 html`的内联`font-size: 16px;`来固定`root`的字体大小以适配转换成`rem`的方案。

`1px = 100 / 375 = 0.2666666666666%` 即 `100px = 26.6666666666666% = 26.6666666666666rem`

由于我们设置了`root元素 html`的内联`font-size: 16px;`来固定`root`的字体大小。因此，实际渲染时（375px 的屏幕），容器`26.6666666666666rem = 26.6666666666666 * 16 = 426.6666666666656px`

也就是说，我们需要更改`viewportWidth`的大小来和设计图适配。直接推导一下设计图与`viewportWidth`的倍数关系 = `426.6666666666656 / 100 = 4.26656`倍。设置`viewportWidth: 1599.96` `（375 * 4.26656 = 1599.96）`

![](https://s1.ax1x.com/2020/08/03/aUDBkt.png)

同样设置媒体查询超出宽度范围后固定`body`宽度，内容居中

```scss
@media screen and (min-width: 1024px) {
  html {
    max-width: 1024px;
  }
}
```

![ ](https://s1.ax1x.com/2020/08/03/aU0BDA.gif)

## rem + vw（网易移动端做法）

原则上也需要一个参考的设计图，这边假设为`375px`宽设计图。计算方法与`postcss-px-to-viewport rem`方案一至。
> 计算公式 ：`1vw = 7.5px` `1px = 0.1333333333333333vw` `100px = 13.3333333333333333vw ` 
>
> `1rem = 13.3333333333333333vw = 100px`

但需要注意的是，设置时需要把`1rem`设置成`100px 对应的 vw值`的值（防止小于浏览器最小字体），编写时根据设计图`px / 100`来编写。

当需要`向上兼容`自适应的时候，设置好`@media`对应不同的`font-size`即可。

同样设置媒体查询超出宽度范围后固定`body`宽度，内容居中。

```scss
html {
  font-size: 26.6666666666666667vw;
  margin: 0 auto;
  body {
    // 重置字体大小
    font-size: 0.14rem;
  }
}

@media screen and (min-width: 768px) {
  html {
    font-size: 9vw;
    max-width: 768px;
  }
}
```

![ren+vw方案](https://s1.ax1x.com/2020/08/28/d5DkrQ.gif)

## 总结

> `Flexible`在当今已经可以放弃掉，转用 CSS的方法解放因使用`JS`动态修改`fontsize`所消耗的性能

### 只做移动端

#### `postcss-px-to-viewport -- vw`方法

一把梭，什么都不用考虑。且是最真实的按照屏幕大小的比例来放大缩小。

### 小屏设计图向上兼容自适应大屏幕

> 当需要从移动端设计图适配到`平板`、`PC屏幕`
> 
#### （最方便）`postcss-px-to-viewport -- rem`

##### 优点

1. 自动转换 UI框架中的单位。
2. 配合`media媒体查询`设置`root fontSize`适配不同分辨率的大小以及`限制最大宽度`。

##### 缺点

1. 所有设置转换的单位都会被转换掉，无法设置某些样式的单位不被转换。

#### （最灵活）`rem + vw`

##### 优点

1. 配合`media媒体查询`设置`root fontSize`适配不同分辨率的大小以及`限制最大宽度。`
2. 高度自定义，谁需要转换谁转换成`rem`。

##### 缺点

1. 当需要把 UI框架中的单位也转换时，会非常的头大。需要一个一个覆盖。

#### （不适合）`postcss-px-to-viewport -- vw`

该方案在限制最大宽度的时候，由于大小都是更具 `viewport`来决定的。所以限制了最大宽度时里面的内容依旧会随`viewport`变大而变大。故不合适

### 大屏设计图向下兼容自适应小屏幕

#### （建议）`postcss-px-to-viewport -- rem`

##### 优点

1. 自动转换 UI框架中的单位，省事。
2. 设置最小宽度居中，超出部分滚动条。
3. 适配比设计稿更大的屏幕时把`root fontSize`设置为更大即可。

##### 缺点

1. 所有设置转换的单位都会被转换掉，无法设置某些样式的单位不被转换。

#### （一般） rem + vw

> 假设屏幕 1024px
>
> 计算公式 ：`1vw = 10.24px` `1px = 0.09765625vw` `100px = 9.765625vw ` 
>
> `1rem = 9.765625vw = 100px`

##### 优点

1. 设置时需要把`1rem`设置成`100px 对应的 vw值`的值（防止小于浏览器最小字体），编写时根据设计图`px / 100`来编写。

##### 缺点

1. 需要写多个媒体查询更改`root fontSize`（因为存在字体太大导致一屏内容显示太少问题）。
2. 当需要把 UI框架中的单位也转换时，会非常的头大。需要一个一个覆盖。
3. 无法设置最小宽度居中内容。

#### （不适合）`postcss-px-to-viewport -- vw`

由于国产浏览器中的`root fontSize`小于默认最小字体（一般是 12px）时，会强制保持`root fontSize = 12px` ，因此该方法并不适合。

