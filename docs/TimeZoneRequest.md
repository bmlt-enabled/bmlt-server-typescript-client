
# TimeZoneRequest


## Properties

Name | Type
------------ | -------------
`latitude` | number
`longitude` | number

## Example

```typescript
import type { TimeZoneRequest } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "latitude": 38.8976763,
  "longitude": -77.0365298,
} satisfies TimeZoneRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimeZoneRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


