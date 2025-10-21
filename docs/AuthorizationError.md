
# AuthorizationError


## Properties

Name | Type
------------ | -------------
`message` | string

## Example

```typescript
import type { AuthorizationError } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "message": This action is unauthorized.,
} satisfies AuthorizationError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuthorizationError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


