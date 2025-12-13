
# SettingsObject


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
`includeServiceBodyEmailInSemantic` | boolean
`bmltTitle` | string
`bmltNotice` | string
`formatLangNames` | object

## Example

```typescript
import type { SettingsObject } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "googleApiKey": ,
  "changeDepthForMeetings": 0,
  "defaultSortKey": null,
  "language": en,
  "defaultDurationTime": 01:00,
  "regionBias": us,
  "distanceUnits": mi,
  "meetingStatesAndProvinces": [],
  "meetingCountiesAndSubProvinces": [],
  "searchSpecMapCenterLongitude": -118.563659,
  "searchSpecMapCenterLatitude": 34.235918,
  "searchSpecMapCenterZoom": 6,
  "numberOfMeetingsForAuto": 10,
  "autoGeocodingEnabled": true,
  "countyAutoGeocodingEnabled": false,
  "zipAutoGeocodingEnabled": false,
  "defaultClosedStatus": true,
  "enableLanguageSelector": false,
  "includeServiceBodyEmailInSemantic": false,
  "bmltTitle": ,
  "bmltNotice": ,
  "formatLangNames": [],
} satisfies SettingsObject

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SettingsObject
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


