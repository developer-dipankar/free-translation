## Usage

```python
var {translate} = require('free-translation');

translate({from: 'en', to: 'bn', textArray:['how are you?', 'call me at tonight at 9pm']}).then(res => {
     console.log(res);
});

```