# Pure-Javascript-30 （Vanilla JS）
## 每日用純JS完成一個功能 持續30天
#### (主要來練習JS)

## Day 1 - Drum kit
[Demo](https://danieltschang.github.io/Pure-Javascript-30/1.%20Drum%20Kit/index)
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
[Demo](https://danieltschang.github.io/Pure-Javascript-30/2.%20CSS%20%2B%20JS%20Clock/index)
-   `transform-origin` CSS 屬性

    -   參數：x-axis y-axis z-axis
    -   or %數 100% ->最右邊 (可超過100%or小於0%)

-   `transition-timing-function` CSS 屬性

    -   製造指針擺動效果
    -   還有很多不同效果
    -   [延伸閱讀 ： 其他效果連結](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)

    `transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);`
    
## Day 3 - CSS variable with JS
[Demo](https://danieltschang.github.io/Pure-Javascript-30/3.%20CSS%20variable%20with%20JS/index)
-   宣告CSS變數
    -   需要透過設置在root且前面加上 "- -"來宣告變數

    ```
    :root{
        --base: #ffc600;
    } 
    ```
    - 要使用時透過```var```來使用 e.g:
    ```
    img{
        background: var(--base)
    }
    ```
    

-   data attribute使用
    -   呼應 Day-1 的data-* attribute，可以透過```this.dataset```來取得JSON物件，e.g:
    ```javascript
        <input data-sizing="px", data-name="hi">
        console.log(this.dataset)
        output=> DomStringMap{sizing:"px",name:"hi"}
        可以直接用 this.dataset.sizing來取值
    ```

```javascript=
    <label for="spacing">Spacing:</label>
    <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">

    <label for="blur">Blur:</label>
    <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">

    <label for="base">Base Color</label>
    <input id="base" type="color" name="base" value="#ffc600">
```
- tips
    1. 用 name 指定變更的 Css Variables
    2. 用 data-sizing 指定 Css Variables 吃的單位

- 加這兩個EventListener來達到動態改變

    [Event Types](https://developer.mozilla.org/en-US/docs/Web/Events)

```javascript=
inputs.forEach((input) => input.addEventListener('change', handleUpdate));

//inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
這邊改用 "input" event not mousemove


function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
```

## Day 4 - Array Cardio
1. map : 跟python的map一樣

    ```Javascript
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },......
        console.log(inventors.map(inventor=>inventor.first + ' ' + inventor.last))
        
        會回傳一個Array裡面是 first+last
    ```
2. filter : 過濾
    ```Javascript
        回傳一個Array，在function中為true之值
        
        console.log(inventors.filter(inventor=>(inventor.year >= 1500 && inventor.year<1600)))
    ```
3. sort : 純數值會使用quick sort，其他可能使用merge sort，依瀏覽器不同
    ```Javascript
        吃兩個值做比較 >１的為先位，<1的為後位
        
        console.log(inventors.sort((firstPerson,secondPerson)=>firstPerson.year > secondPerson.year ? 1: -1))
    ```
4. reduce : 
    ```Javascript
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    console.log(data.reduce((obj,item)=>{
      if(!obj[item]){
        obj[item]=0;
      }
      obj[item]++;
      
      return obj;
    },{
    }))
    ```
