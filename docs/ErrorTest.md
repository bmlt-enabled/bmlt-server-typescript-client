
# ErrorTest


## Properties

Name | Type
------------ | -------------
`arbitraryString` | string
`arbitraryInt` | number
`forceServerError` | boolean

## Example

```typescript
import type { ErrorTest } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "arbitraryString": string,
  "arbitraryInt": 123,
  "forceServerError": true,
} satisfies ErrorTest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ErrorTest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


