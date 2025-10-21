
# RootServerBase


## Properties

Name | Type
------------ | -------------
`sourceId` | number
`name` | string
`url` | string
`statistics` | [RootServerBaseStatistics](RootServerBaseStatistics.md)
`serverInfo` | string
`lastSuccessfulImport` | Date

## Example

```typescript
import type { RootServerBase } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "sourceId": 0,
  "name": string,
  "url": https://example.com/main_server,
  "statistics": null,
  "serverInfo": string,
  "lastSuccessfulImport": null,
} satisfies RootServerBase

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RootServerBase
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


