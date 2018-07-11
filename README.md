# What is it?

Library that helps to generate random unique identifiers for DOM elements.
`getElementId` accepts an element as an argument and returns its id.
If element has no id attribute, a random id is generated and assigned to the element.
For example:

```html
<div id="someid"></div>
<div></div>
```

```javascript
const random_id = require('dom-random-id');
let divs = document.getElementsByTagName("div");
console.log(random_id.getElementId(divs[0])); // "someid"
console.log(random_id.getElementId(divs[1])); // new randomly generated ID
```

# Installing

```
npm i --save dom-random-id
```

# Usage

TypeScript (definitions are already included in the package):

```typescript
import { getElementId } from 'dom-random-id';
```

With `require`:

```javascript
const random_id = require('dom-random-id');
random_id.getElementId(elem);
```
