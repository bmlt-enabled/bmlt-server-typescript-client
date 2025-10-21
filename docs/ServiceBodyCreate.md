
# ServiceBodyCreate


## Properties

Name | Type
------------ | -------------
`parentId` | number
`name` | string
`description` | string
`type` | string
`adminUserId` | number
`assignedUserIds` | Array&lt;number&gt;
`url` | string
`helpline` | string
`email` | string
`worldId` | string

## Example

```typescript
import type { ServiceBodyCreate } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "parentId": 0,
  "name": string,
  "description": string,
  "type": string,
  "adminUserId": 0,
  "assignedUserIds": null,
  "url": string,
  "helpline": string,
  "email": string,
  "worldId": string,
} satisfies ServiceBodyCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ServiceBodyCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


