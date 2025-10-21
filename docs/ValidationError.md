
# ValidationError


## Properties

Name | Type
------------ | -------------
`message` | string
`errors` | { [key: string]: Array&lt;string&gt;; }

## Example

```typescript
import type { ValidationError } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "message": The field is required. (and 1 more error),
  "errors": null,
} satisfies ValidationError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidationError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


