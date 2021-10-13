# Pure-Javascript-30 （Vanilla JS）
## 每日用純JS完成一個功能 持續30天
#### (主要來練習JS)

## Day 1 - Drum kit
[Demo](https://cssource1156.github.io/Pure-Javascript-30/1.%20Drum%20Kit/index)
1.  HTML5 中的 data-* attribute 屬性
    - HTML中可以自定義data-*, 例如`data-key=83`...etc
    - 可以透過以下來抓到DOM上對應的data-key (e為eventlisten的event)
    ```JavaScript
    querySelector(`div[data-key="${e.keyCode}"]`)
    ```
    [延伸閱讀 : data attribute](https://pjchender.blogspot.com/2017/01/html-5-data-attribute.html)
2. audio tag
    - 透過```<audio></audio>```的tag可以實現音樂播放
        ```JavaScript
        // 從頭播放
        audio.currentTime = 0;
        audio.play();
        ```
4. `transitionend` 事件
    ```Javascript
    addEventListener('transitionend', removeTransition)
    ```
    可以在某個效果render完後做某件事
5. 跟JQuery不同的ClassName Add
    - 在JQuery中通常使用```key.addClass('xxx')```
    - 在Vanilla JS中使用```key.ClassList.add('xxx')```
        
        
## Day 2 - CSS + JS Clock
[Demo](https://cssource1156.github.io/Pure-Javascript-30/2.%20CSS%20%2B%20JS%20Clock/index)
-   `transform-origin` CSS 屬性

    -   參數：x-axis y-axis z-axis
    -   or %數 100% ->最右邊 (可超過100%or小於0%)

-   `transition-timing-function` CSS 屬性

    -   製造指針擺動效果
    -   還有很多不同效果
    -   [延伸閱讀 ： 其他效果連結](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)

    `transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);`
