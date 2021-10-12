# Pure-Javascript-30 （Vanilla JS）
## 每日用純JS完成一個功能 持續30天
#### (主要來練習JS)

## 1. Day1 - Drun kit
1.  HTML5 中的 data-* attribute 屬性
    - HTML中可以自定義data-*, 例如`data-key=83`...etc
    - 可以透過以下來抓到DOM上對應的data-key (e為eventlisten的event)
    ```JavaScript
    querySelector(`div[data-key="${e.keyCode}"]`)
    ```
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
        
