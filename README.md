# bmlt-server-client@latest

A TypeScript SDK client for the localhost API.

## Usage

First, install the SDK from npm.

```bash
npm install bmlt-server-client --save
```

Next, try it out.


```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { AuthLogoutRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  try {
    const data = await api.authLogout();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *http://localhost:8000/main_server*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*RootServerApi* | [**authLogout**](docs/RootServerApi.md#authlogout) | **POST** /api/v1/auth/logout | Revokes a token
*RootServerApi* | [**authRefresh**](docs/RootServerApi.md#authrefresh) | **POST** /api/v1/auth/refresh | Revokes and issues a new token
*RootServerApi* | [**authToken**](docs/RootServerApi.md#authtoken) | **POST** /api/v1/auth/token | Creates a token
*RootServerApi* | [**createErrorTest**](docs/RootServerApi.md#createerrortest) | **POST** /api/v1/errortest | Tests some errors
*RootServerApi* | [**createFormat**](docs/RootServerApi.md#createformat) | **POST** /api/v1/formats | Creates a format
*RootServerApi* | [**createMeeting**](docs/RootServerApi.md#createmeeting) | **POST** /api/v1/meetings | Creates a meeting
*RootServerApi* | [**createServiceBody**](docs/RootServerApi.md#createservicebody) | **POST** /api/v1/servicebodies | Creates a service body
*RootServerApi* | [**createUser**](docs/RootServerApi.md#createuser) | **POST** /api/v1/users | Creates a user
*RootServerApi* | [**deleteFormat**](docs/RootServerApi.md#deleteformat) | **DELETE** /api/v1/formats/{formatId} | Deletes a format
*RootServerApi* | [**deleteMeeting**](docs/RootServerApi.md#deletemeeting) | **DELETE** /api/v1/meetings/{meetingId} | Deletes a meeting
*RootServerApi* | [**deleteServiceBody**](docs/RootServerApi.md#deleteservicebody) | **DELETE** /api/v1/servicebodies/{serviceBodyId} | Deletes a service body
*RootServerApi* | [**deleteUser**](docs/RootServerApi.md#deleteuser) | **DELETE** /api/v1/users/{userId} | Deletes a user
*RootServerApi* | [**getFormat**](docs/RootServerApi.md#getformat) | **GET** /api/v1/formats/{formatId} | Retrieves a format
*RootServerApi* | [**getFormats**](docs/RootServerApi.md#getformats) | **GET** /api/v1/formats | Retrieves formats
*RootServerApi* | [**getLaravelLog**](docs/RootServerApi.md#getlaravellog) | **GET** /api/v1/logs/laravel | Retrieves laravel log
*RootServerApi* | [**getMeeting**](docs/RootServerApi.md#getmeeting) | **GET** /api/v1/meetings/{meetingId} | Retrieves a meeting
*RootServerApi* | [**getMeetingChanges**](docs/RootServerApi.md#getmeetingchanges) | **GET** /api/v1/meetings/{meetingId}/changes | Retrieve changes for a meeting
*RootServerApi* | [**getMeetings**](docs/RootServerApi.md#getmeetings) | **GET** /api/v1/meetings | Retrieves meetings
*RootServerApi* | [**getRootServer**](docs/RootServerApi.md#getrootserver) | **GET** /api/v1/rootservers/{rootServerId} | Retrieves a root server
*RootServerApi* | [**getRootServers**](docs/RootServerApi.md#getrootservers) | **GET** /api/v1/rootservers | Retrieves root servers
*RootServerApi* | [**getServiceBodies**](docs/RootServerApi.md#getservicebodies) | **GET** /api/v1/servicebodies | Retrieves service bodies
*RootServerApi* | [**getServiceBody**](docs/RootServerApi.md#getservicebody) | **GET** /api/v1/servicebodies/{serviceBodyId} | Retrieves a service body
*RootServerApi* | [**getUser**](docs/RootServerApi.md#getuser) | **GET** /api/v1/users/{userId} | Retrieves a single user
*RootServerApi* | [**getUsers**](docs/RootServerApi.md#getusers) | **GET** /api/v1/users | Retrieves users
*RootServerApi* | [**partialUpdateUser**](docs/RootServerApi.md#partialupdateuser) | **PATCH** /api/v1/users/{userId} | Patches a user
*RootServerApi* | [**patchFormat**](docs/RootServerApi.md#patchformat) | **PATCH** /api/v1/formats/{formatId} | Patches a format
*RootServerApi* | [**patchMeeting**](docs/RootServerApi.md#patchmeeting) | **PATCH** /api/v1/meetings/{meetingId} | Patches a meeting
*RootServerApi* | [**patchServiceBody**](docs/RootServerApi.md#patchservicebody) | **PATCH** /api/v1/servicebodies/{serviceBodyId} | Patches a service body
*RootServerApi* | [**updateFormat**](docs/RootServerApi.md#updateformat) | **PUT** /api/v1/formats/{formatId} | Updates a format
*RootServerApi* | [**updateMeeting**](docs/RootServerApi.md#updatemeeting) | **PUT** /api/v1/meetings/{meetingId} | Updates a meeting
*RootServerApi* | [**updateServiceBody**](docs/RootServerApi.md#updateservicebody) | **PUT** /api/v1/servicebodies/{serviceBodyId} | Updates a Service Body
*RootServerApi* | [**updateUser**](docs/RootServerApi.md#updateuser) | **PUT** /api/v1/users/{userId} | Update single user


### Models

- [AuthenticationError](docs/AuthenticationError.md)
- [AuthorizationError](docs/AuthorizationError.md)
- [ConflictError](docs/ConflictError.md)
- [ErrorTest](docs/ErrorTest.md)
- [Format](docs/Format.md)
- [FormatBase](docs/FormatBase.md)
- [FormatCreate](docs/FormatCreate.md)
- [FormatPartialUpdate](docs/FormatPartialUpdate.md)
- [FormatTranslation](docs/FormatTranslation.md)
- [FormatUpdate](docs/FormatUpdate.md)
- [Meeting](docs/Meeting.md)
- [MeetingBase](docs/MeetingBase.md)
- [MeetingChangeResource](docs/MeetingChangeResource.md)
- [MeetingCreate](docs/MeetingCreate.md)
- [MeetingPartialUpdate](docs/MeetingPartialUpdate.md)
- [MeetingUpdate](docs/MeetingUpdate.md)
- [NotFoundError](docs/NotFoundError.md)
- [RootServer](docs/RootServer.md)
- [RootServerBase](docs/RootServerBase.md)
- [RootServerBaseStatistics](docs/RootServerBaseStatistics.md)
- [RootServerBaseStatisticsMeetings](docs/RootServerBaseStatisticsMeetings.md)
- [RootServerBaseStatisticsServiceBodies](docs/RootServerBaseStatisticsServiceBodies.md)
- [ServerError](docs/ServerError.md)
- [ServiceBody](docs/ServiceBody.md)
- [ServiceBodyBase](docs/ServiceBodyBase.md)
- [ServiceBodyCreate](docs/ServiceBodyCreate.md)
- [ServiceBodyPartialUpdate](docs/ServiceBodyPartialUpdate.md)
- [ServiceBodyUpdate](docs/ServiceBodyUpdate.md)
- [Token](docs/Token.md)
- [TokenCredentials](docs/TokenCredentials.md)
- [User](docs/User.md)
- [UserBase](docs/UserBase.md)
- [UserCreate](docs/UserCreate.md)
- [UserPartialUpdate](docs/UserPartialUpdate.md)
- [UserUpdate](docs/UserUpdate.md)
- [ValidationError](docs/ValidationError.md)

### Authorization


Authentication schemes defined for the API:
<a id="bmltToken-password"></a>
#### bmltToken password


- **Type**: OAuth
- **Flow**: password
- **Authorization URL**: 
- **Scopes**: N/A

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
- Package version: `latest`
- Generator version: `7.17.0-SNAPSHOT`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[MIT](https://github.com/bmlt-enabled/bmlt-root-server/blob/main/LICENSE)
