
# Token


## Properties

Name | Type
------------ | -------------
`accessToken` | string
`expiresAt` | number
`tokenType` | string
`userId` | number

## Example

```typescript
import type { Token } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "accessToken": 2|tR6PIqa8tiBJWMu4zyb3qw4eECuERjLd7xeLKgBu,
  "expiresAt": 1667342171,
  "tokenType": bearer,
  "userId": 1,
} satisfies Token

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Token
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


