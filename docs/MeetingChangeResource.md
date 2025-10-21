
# MeetingChangeResource


## Properties

Name | Type
------------ | -------------
`dateString` | string
`userName` | string
`serviceBodyName` | string
`details` | Array&lt;string&gt;

## Example

```typescript
import type { MeetingChangeResource } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "dateString": 3:35 PM, 10/14/2024,
  "userName": Greater New York Regional Administrator,
  "serviceBodyName": Bronx Area Service,
  "details": null,
} satisfies MeetingChangeResource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MeetingChangeResource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


