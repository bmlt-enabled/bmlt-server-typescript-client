
# SettingsUpdate

Partial update object - include only the settings you want to update

## Properties

Name | Type
------------ | -------------
`googleApiKey` | string
`changeDepthForMeetings` | number
`defaultSortKey` | string
`language` | string
`defaultDurationTime` | string
`regionBias` | string
`distanceUnits` | string
`meetingStatesAndProvinces` | Array&lt;string&gt;
`meetingCountiesAndSubProvinces` | Array&lt;string&gt;
`searchSpecMapCenterLongitude` | number
`searchSpecMapCenterLatitude` | number
`searchSpecMapCenterZoom` | number
`numberOfMeetingsForAuto` | number
`autoGeocodingEnabled` | boolean
`countyAutoGeocodingEnabled` | boolean
`zipAutoGeocodingEnabled` | boolean
`defaultClosedStatus` | boolean
`enableLanguageSelector` | boolean
`aggregatorModeEnabled` | boolean
`aggregatorMaxGeoWidthKm` | number
`includeServiceBodyEmailInSemantic` | boolean
`bmltTitle` | string
`bmltNotice` | string
`formatLangNames` | object

## Example

```typescript
import type { SettingsUpdate } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "googleApiKey": null,
  "changeDepthForMeetings": null,
  "defaultSortKey": null,
  "language": null,
  "defaultDurationTime": null,
  "regionBias": null,
  "distanceUnits": null,
  "meetingStatesAndProvinces": null,
  "meetingCountiesAndSubProvinces": null,
  "searchSpecMapCenterLongitude": null,
  "searchSpecMapCenterLatitude": null,
  "searchSpecMapCenterZoom": null,
  "numberOfMeetingsForAuto": null,
  "autoGeocodingEnabled": null,
  "countyAutoGeocodingEnabled": null,
  "zipAutoGeocodingEnabled": null,
  "defaultClosedStatus": null,
  "enableLanguageSelector": null,
  "aggregatorModeEnabled": null,
  "aggregatorMaxGeoWidthKm": null,
  "includeServiceBodyEmailInSemantic": null,
  "bmltTitle": null,
  "bmltNotice": null,
  "formatLangNames": null,
} satisfies SettingsUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SettingsUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


