
# Format


## Properties

Name | Type
------------ | -------------
`worldId` | string
`type` | string
`translations` | [Array&lt;FormatTranslation&gt;](FormatTranslation.md)
`id` | number

## Example

```typescript
import type { Format } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "worldId": string,
  "type": string,
  "translations": null,
  "id": 0,
} satisfies Format

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Format
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


