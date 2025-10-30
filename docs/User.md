
# User


## Properties

Name | Type
------------ | -------------
`username` | string
`type` | string
`displayName` | string
`description` | string
`email` | string
`ownerId` | number
`id` | number
`lastActiveAt` | Date

## Example

```typescript
import type { User } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "username": string,
  "type": string,
  "displayName": string,
  "description": string,
  "email": string,
  "ownerId": 0,
  "id": 0,
  "lastActiveAt": 2019-05-02T05:05Z,
} satisfies User

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as User
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


