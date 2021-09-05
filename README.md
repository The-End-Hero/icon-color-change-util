### icon颜色修改

```bash
npm install icon-color-change-util
```

#### 使用

```javascript
import { iconColorChangeUtil } from "icon-color-change-util";

// svg png 等base64
const iconBase = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAvCAYAAACG2RgcAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMsSURBVHgBzZjdcdpAEMd3hbDNm11BSAckFVgZG8ZviRuw4wbsuIFAB3YFdhpIePMMMBapAKcC1AHMOB6I9bHZE5DhQ+JWQmjyexFzrO7+2tvbvTuA/wSElJBt7489r4JEH7mTN2QYlX+dEg0JYAhEv/h3d7dWa+r6SyxkZNtldN0rMIwzHmhf9BLikAdqBoVCo2RZTqQJCFEeePW8S/7SOmwAD1jfMc1btKzhUrue0Au+b7MHypAFiA4VCta8d7RCftt2xZyIkE2DnKFBZO1Uq09aIVsUsSImVkjm0xHHdJqMWAPXrW9dhILHQM+7i/TIqNU6R8Q7yJFIj6BhfIWcMZcbRu32Ycop6XIWddQPQizz4xASsCKERZxzAEECuuR5n0snJ8584+jhoYymeScVtDLiuN3u8aMieZkFN/eOjj6tM+F4u+d4OwMNCzEy4DQuFsHTQK77RWc2LhavQBXAJEL2uJqCEA7o7vJ0RHHANYXr063OzoCUBETfxLaITzqb1EKSUAwCR2eTXkiCJe4jamvVohDPc0AISoNaoVKCvr9FePkO+CGptkMyzXdxO64ZYfH0vD5oiJoabWBN2VfVWQ0E60SoCi5gRQgvtZ8gRVVOHui10zmjSQ6aNKuNdadzyf/1pLG0MjWq1nCj6CtWe0NnJhASEllUEsRJZkQuX0kmzJpIIWPTvIGciRRyMDlzdCEnuDrfx2ZWnp4G5ETguo1YIaXj4y7k4BXlDVXF19aaPLyivKGea4UorxDRPWyJmTe0QkJ8v0GCHVYaZt4QCZkqzjyvUBA05nd4ov1ImFeItBVUroL6pVqtPt8kEhLuOxEvICN40NOINhkqcHnvuXnGJbqZXUWkEqL4w1dPG00Rv7v78hKZEpLfoU22CY9p3uUT4du4I0jizfM0415DQpZXyTKprzd5z6K8Ykls+XDe261W36+zSX2cYDdfcKIb6A2pH/j+qc4stZCpm7UDsDeuJUfTjU56YS1aUxhVXEhunRWpY2Secav1nSvY4vUE4g++stB6bEYmZ99RsXixkF9Uvnh+TpSJM/FIKEbdEBUKj6EO3/8giYt5/gJdKGmdC/+4fwAAAABJRU5ErkJggg=='
const toColor = '#0055af'; // hex | rgba | rgb
iconColorChangeUtil({
    iconUrl: iconBase,
    newColor: toColor,
    // width: 100, // 自定义转换宽度
    // height: 100, // 自定义转换高度
    type: 'data-png',
    // callback: (data) => {
    //     // 转换后base64
    //     console.log(data, 'data')
    // },
}).then((data)=>{
  console.log(data);
  const two = document.getElementById('two');
  two.src = data;
})

```

