
# GeocodeResult


## Properties

Name | Type
------------ | -------------
`latitude` | number
`longitude` | number
`county` | string
`zipCode` | string
`formattedAddress` | string

## Example

```typescript
import type { GeocodeResult } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "latitude": 38.8976763,
  "longitude": -77.0365298,
  "county": ,
  "zipCode": 20500,
  "formattedAddress": 1600 Pennsylvania Avenue NW, Washington, DC 20500, USA,
} satisfies GeocodeResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeocodeResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


