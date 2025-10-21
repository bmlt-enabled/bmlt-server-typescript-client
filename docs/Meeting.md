
# Meeting


## Properties

Name | Type
------------ | -------------
`serviceBodyId` | number
`formatIds` | Array&lt;number&gt;
`venueType` | number
`temporarilyVirtual` | boolean
`day` | number
`startTime` | string
`duration` | string
`timeZone` | string
`latitude` | number
`longitude` | number
`published` | boolean
`email` | string
`worldId` | string
`name` | string
`locationText` | string
`locationInfo` | string
`locationStreet` | string
`locationNeighborhood` | string
`locationCitySubsection` | string
`locationMunicipality` | string
`locationSubProvince` | string
`locationProvince` | string
`locationPostalCode1` | string
`locationNation` | string
`phoneMeetingNumber` | string
`virtualMeetingLink` | string
`virtualMeetingAdditionalInfo` | string
`contactName1` | string
`contactName2` | string
`contactPhone1` | string
`contactPhone2` | string
`contactEmail1` | string
`contactEmail2` | string
`busLines` | string
`trainLines` | string
`comments` | string
`customFields` | { [key: string]: string; }
`id` | number

## Example

```typescript
import type { Meeting } from 'bmlt-server-client'

// TODO: Update the object below with actual values
const example = {
  "serviceBodyId": 0,
  "formatIds": null,
  "venueType": 1,
  "temporarilyVirtual": false,
  "day": 0,
  "startTime": string,
  "duration": 01:00,
  "timeZone": America/New_York,
  "latitude": 35.698741,
  "longitude": -81.26273,
  "published": true,
  "email": string,
  "worldId": string,
  "name": string,
  "locationText": string,
  "locationInfo": string,
  "locationStreet": string,
  "locationNeighborhood": string,
  "locationCitySubsection": string,
  "locationMunicipality": string,
  "locationSubProvince": string,
  "locationProvince": string,
  "locationPostalCode1": string,
  "locationNation": string,
  "phoneMeetingNumber": string,
  "virtualMeetingLink": string,
  "virtualMeetingAdditionalInfo": string,
  "contactName1": string,
  "contactName2": string,
  "contactPhone1": string,
  "contactPhone2": string,
  "contactEmail1": string,
  "contactEmail2": string,
  "busLines": string,
  "trainLines": string,
  "comments": string,
  "customFields": {key1=value1, key2=value2},
  "id": 0,
} satisfies Meeting

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Meeting
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


