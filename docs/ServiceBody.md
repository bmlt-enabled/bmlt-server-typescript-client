
# ServiceBody


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
`id` | number

## Example

```typescript
import type { ServiceBody } from 'bmlt-server-client'

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
  "id": 0,
} satisfies ServiceBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ServiceBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


