
# RootServerBaseStatisticsMeetings


## Properties

Name | Type
------------ | -------------
`numTotal` | number
`numInPerson` | number
`numVirtual` | number
`numHybrid` | number
`numUnknown` | number

## Example

```typescript
import type { RootServerBaseStatisticsMeetings } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "numTotal": 0,
  "numInPerson": 0,
  "numVirtual": 0,
  "numHybrid": 0,
  "numUnknown": 0,
} satisfies RootServerBaseStatisticsMeetings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RootServerBaseStatisticsMeetings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


