# What is it?

Library that helps quickly generate random unique identifiers for DOM elements.
`generateRandomId` generates unique random identifier.
`getElementId` accepts an element as an argument and returns its id. If element has no id defined, it assigns a random id to it and returns it.

# Installing

```
npm i --save dom-random-id
```

# Usage

TypeScript (definitions are already included in the package):

```typescript
import { getElementId, assignRandomId } from 'dom-random-id';
```

With `require`:

```javascript
const random_id = require('dom-random-id');
random_id.getElementId();
random_id.assignRandomId(elem);
```
