
# RootServer


## Properties

Name | Type
------------ | -------------
`sourceId` | number
`name` | string
`url` | string
`statistics` | [RootServerBaseStatistics](RootServerBaseStatistics.md)
`serverInfo` | string
`lastSuccessfulImport` | Date
`id` | number

## Example

```typescript
import type { RootServer } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "sourceId": 0,
  "name": string,
  "url": https://example.com/main_server,
  "statistics": null,
  "serverInfo": string,
  "lastSuccessfulImport": null,
  "id": 0,
} satisfies RootServer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RootServer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


