
# TokenCredentials


## Properties

Name | Type
------------ | -------------
`username` | string
`password` | string

## Example

```typescript
import type { TokenCredentials } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "username": MyUsername,
  "password": PassWord12345,
} satisfies TokenCredentials

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TokenCredentials
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


