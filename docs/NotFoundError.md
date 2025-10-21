
# NotFoundError


## Properties

Name | Type
------------ | -------------
`message` | string

## Example

```typescript
import type { NotFoundError } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "message": The requested resource was not found.,
} satisfies NotFoundError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NotFoundError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


