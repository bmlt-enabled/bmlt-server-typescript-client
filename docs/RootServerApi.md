# RootServerApi

All URIs are relative to *http://localhost:8000/main_server*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authLogout**](RootServerApi.md#authlogout) | **POST** /api/v1/auth/logout | Revokes a token |
| [**authRefresh**](RootServerApi.md#authrefresh) | **POST** /api/v1/auth/refresh | Revokes and issues a new token |
| [**authToken**](RootServerApi.md#authtoken) | **POST** /api/v1/auth/token | Creates a token |
| [**createErrorTest**](RootServerApi.md#createerrortest) | **POST** /api/v1/errortest | Tests some errors |
| [**createFormat**](RootServerApi.md#createformat) | **POST** /api/v1/formats | Creates a format |
| [**createMeeting**](RootServerApi.md#createmeeting) | **POST** /api/v1/meetings | Creates a meeting |
| [**createServiceBody**](RootServerApi.md#createservicebody) | **POST** /api/v1/servicebodies | Creates a service body |
| [**createUser**](RootServerApi.md#createuser) | **POST** /api/v1/users | Creates a user |
| [**deleteFormat**](RootServerApi.md#deleteformat) | **DELETE** /api/v1/formats/{formatId} | Deletes a format |
| [**deleteMeeting**](RootServerApi.md#deletemeeting) | **DELETE** /api/v1/meetings/{meetingId} | Deletes a meeting |
| [**deleteServiceBody**](RootServerApi.md#deleteservicebody) | **DELETE** /api/v1/servicebodies/{serviceBodyId} | Deletes a service body |
| [**deleteUser**](RootServerApi.md#deleteuser) | **DELETE** /api/v1/users/{userId} | Deletes a user |
| [**getFormat**](RootServerApi.md#getformat) | **GET** /api/v1/formats/{formatId} | Retrieves a format |
| [**getFormats**](RootServerApi.md#getformats) | **GET** /api/v1/formats | Retrieves formats |
| [**getLaravelLog**](RootServerApi.md#getlaravellog) | **GET** /api/v1/logs/laravel | Retrieves laravel log |
| [**getMeeting**](RootServerApi.md#getmeeting) | **GET** /api/v1/meetings/{meetingId} | Retrieves a meeting |
| [**getMeetingChanges**](RootServerApi.md#getmeetingchanges) | **GET** /api/v1/meetings/{meetingId}/changes | Retrieve changes for a meeting |
| [**getMeetings**](RootServerApi.md#getmeetings) | **GET** /api/v1/meetings | Retrieves meetings |
| [**getRootServer**](RootServerApi.md#getrootserver) | **GET** /api/v1/rootservers/{rootServerId} | Retrieves a root server |
| [**getRootServers**](RootServerApi.md#getrootservers) | **GET** /api/v1/rootservers | Retrieves root servers |
| [**getServiceBodies**](RootServerApi.md#getservicebodies) | **GET** /api/v1/servicebodies | Retrieves service bodies |
| [**getServiceBody**](RootServerApi.md#getservicebody) | **GET** /api/v1/servicebodies/{serviceBodyId} | Retrieves a service body |
| [**getSettings**](RootServerApi.md#getsettings) | **GET** /api/v1/settings | Retrieves all settings |
| [**getUser**](RootServerApi.md#getuser) | **GET** /api/v1/users/{userId} | Retrieves a single user |
| [**getUsers**](RootServerApi.md#getusers) | **GET** /api/v1/users | Retrieves users |
| [**partialUpdateUser**](RootServerApi.md#partialupdateuser) | **PATCH** /api/v1/users/{userId} | Patches a user |
| [**patchFormat**](RootServerApi.md#patchformat) | **PATCH** /api/v1/formats/{formatId} | Patches a format |
| [**patchMeeting**](RootServerApi.md#patchmeeting) | **PATCH** /api/v1/meetings/{meetingId} | Patches a meeting |
| [**patchServiceBody**](RootServerApi.md#patchservicebody) | **PATCH** /api/v1/servicebodies/{serviceBodyId} | Patches a service body |
| [**updateFormat**](RootServerApi.md#updateformat) | **PUT** /api/v1/formats/{formatId} | Updates a format |
| [**updateMeeting**](RootServerApi.md#updatemeeting) | **PUT** /api/v1/meetings/{meetingId} | Updates a meeting |
| [**updateServiceBody**](RootServerApi.md#updateservicebody) | **PUT** /api/v1/servicebodies/{serviceBodyId} | Updates a Service Body |
| [**updateSettings**](RootServerApi.md#updatesettings) | **PATCH** /api/v1/settings | Update settings |
| [**updateUser**](RootServerApi.md#updateuser) | **PUT** /api/v1/users/{userId} | Update single user |



## authLogout

> authLogout()

Revokes a token

Revoke token and logout.

### Example

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

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns when token was logged out. |  -  |
| **401** | Returns when request is unauthenticated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authRefresh

> Token authRefresh()

Revokes and issues a new token

Refresh token.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { AuthRefreshRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  try {
    const data = await api.authRefresh();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Token**](Token.md)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns when refresh is successful. |  -  |
| **401** | Returns when request is unauthenticated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## authToken

> Token authToken(tokenCredentials)

Creates a token

Exchange credentials for a new token

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { AuthTokenRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const api = new RootServerApi();

  const body = {
    // TokenCredentials | User credentials
    tokenCredentials: ...,
  } satisfies AuthTokenRequest;

  try {
    const data = await api.authToken(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tokenCredentials** | [TokenCredentials](TokenCredentials.md) | User credentials | |

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns when POST is successful. |  -  |
| **401** | Returns when credentials are incorrect. |  -  |
| **403** | Returns when unauthorized. |  -  |
| **422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createErrorTest

> ErrorTest createErrorTest(errorTest)

Tests some errors

Tests some errors.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { CreateErrorTestRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // ErrorTest | Pass in error test object.
    errorTest: ...,
  } satisfies CreateErrorTestRequest;

  try {
    const data = await api.createErrorTest(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **errorTest** | [ErrorTest](ErrorTest.md) | Pass in error test object. | |

### Return type

[**ErrorTest**](ErrorTest.md)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returns when POST is successful. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **422** | Validation error. |  -  |
| **500** | Server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createFormat

> Format createFormat(formatCreate)

Creates a format

Creates a format.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { CreateFormatRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // FormatCreate | Pass in format object
    formatCreate: ...,
  } satisfies CreateFormatRequest;

  try {
    const data = await api.createFormat(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **formatCreate** | [FormatCreate](FormatCreate.md) | Pass in format object | |

### Return type

[**Format**](Format.md)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returns when POST is successful. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **403** | Returns when user is unauthorized to perform action. |  -  |
| **404** | Returns when no format exists. |  -  |
| **422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createMeeting

> Meeting createMeeting(meetingCreate)

Creates a meeting

Creates a meeting.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { CreateMeetingRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // MeetingCreate | Pass in meeting object
    meetingCreate: ...,
  } satisfies CreateMeetingRequest;

  try {
    const data = await api.createMeeting(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **meetingCreate** | [MeetingCreate](MeetingCreate.md) | Pass in meeting object | |

### Return type

[**Meeting**](Meeting.md)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returns when POST is successful. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **403** | Returns when user is unauthorized to perform action. |  -  |
| **404** | Returns when no meeting body exists. |  -  |
| **422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createServiceBody

> ServiceBody createServiceBody(serviceBodyCreate)

Creates a service body

Creates a service body.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { CreateServiceBodyRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // ServiceBodyCreate | Pass in service body object
    serviceBodyCreate: ...,
  } satisfies CreateServiceBodyRequest;

  try {
    const data = await api.createServiceBody(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **serviceBodyCreate** | [ServiceBodyCreate](ServiceBodyCreate.md) | Pass in service body object | |

### Return type

[**ServiceBody**](ServiceBody.md)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returns when POST is successful. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **403** | Returns when user is unauthorized to perform action. |  -  |
| **404** | Returns when no service body exists. |  -  |
| **422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createUser

> User createUser(userCreate)

Creates a user

Creates a user.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { CreateUserRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // UserCreate | Pass in user object
    userCreate: ...,
  } satisfies CreateUserRequest;

  try {
    const data = await api.createUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userCreate** | [UserCreate](UserCreate.md) | Pass in user object | |

### Return type

[**User**](User.md)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Returns when POST is successful. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **403** | Returns when user is unauthorized to perform action. |  -  |
| **404** | Returns when no user exists. |  -  |
| **422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteFormat

> deleteFormat(formatId)

Deletes a format

Deletes a format by id.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { DeleteFormatRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of format
    formatId: 1,
  } satisfies DeleteFormatRequest;

  try {
    const data = await api.deleteFormat(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **formatId** | `number` | ID of format | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Success. |  -  |
| **401** | Returns when not authenticated |  -  |
| **403** | Returns when unauthorized |  -  |
| **404** | Returns when no format exists. |  -  |
| **409** | Returns when format has meetings assigned. |  -  |
| **422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteMeeting

> deleteMeeting(meetingId)

Deletes a meeting

Deletes a meeting by id.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { DeleteMeetingRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of meeting
    meetingId: 1,
  } satisfies DeleteMeetingRequest;

  try {
    const data = await api.deleteMeeting(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **meetingId** | `number` | ID of meeting | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Success. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **403** | Returns when user is unauthorized to perform action. |  -  |
| **404** | Returns when no meeting exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteServiceBody

> deleteServiceBody(serviceBodyId, force)

Deletes a service body

Deletes a service body by id. If the service body has meetings, use force&#x3D;true to delete them as well.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { DeleteServiceBodyRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of service body
    serviceBodyId: 1,
    // 'true' | 'false' | Force deletion of service body and all associated meetings (optional)
    force: false,
  } satisfies DeleteServiceBodyRequest;

  try {
    const data = await api.deleteServiceBody(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **serviceBodyId** | `number` | ID of service body | [Defaults to `undefined`] |
| **force** | `true`, `false` | Force deletion of service body and all associated meetings | [Optional] [Defaults to `&#39;false&#39;`] [Enum: true, false] |

### Return type

`void` (Empty response body)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Success. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **403** | Returns when user is unauthorized to perform action. |  -  |
| **404** | Returns when no service body exists. |  -  |
| **409** | Returns when service body has children or meetings (when force&#x3D;false). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteUser

> deleteUser(userId)

Deletes a user

Deletes a user by id

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { DeleteUserRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of user
    userId: 1,
  } satisfies DeleteUserRequest;

  try {
    const data = await api.deleteUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | `number` | ID of user | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Success. |  -  |
| **401** | Returns when not authenticated |  -  |
| **403** | Returns when unauthorized |  -  |
| **404** | Returns when no user exists. |  -  |
| **409** | Returns when user is still referenced by service bodies. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFormat

> Format getFormat(formatId)

Retrieves a format

Retrieve a format

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { GetFormatRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of format
    formatId: 1,
  } satisfies GetFormatRequest;

  try {
    const data = await api.getFormat(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **formatId** | `number` | ID of format | [Defaults to `undefined`] |

### Return type

[**Format**](Format.md)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns when user is authenticated. |  -  |
| **401** | Returns when not authenticated. |  -  |
| **404** | Returns when no format exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFormats

> Array&lt;Format&gt; getFormats()

Retrieves formats

Retrieve formats

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { GetFormatsRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  try {
    const data = await api.getFormats();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Format&gt;**](Format.md)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns when user is authenticated. |  -  |
| **401** | Returns when not authenticated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLaravelLog

> Blob getLaravelLog()

Retrieves laravel log

Retrieve the laravel log if it exists.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { GetLaravelLogRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  try {
    const data = await api.getLaravelLog();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Blob**

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/gzip`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns when user is authenticated. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **403** | Returns when user is unauthorized to perform action. |  -  |
| **404** | Returns when no laravel log file exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMeeting

> Meeting getMeeting(meetingId)

Retrieves a meeting

Retrieve a meeting.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { GetMeetingRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of meeting
    meetingId: 1,
  } satisfies GetMeetingRequest;

  try {
    const data = await api.getMeeting(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **meetingId** | `number` | ID of meeting | [Defaults to `undefined`] |

### Return type

[**Meeting**](Meeting.md)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns when user is authenticated. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **404** | Returns when no meeting exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMeetingChanges

> Array&lt;MeetingChangeResource&gt; getMeetingChanges(meetingId)

Retrieve changes for a meeting

Retrieve all changes made to a specific meeting.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { GetMeetingChangesRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of the meeting
    meetingId: 1,
  } satisfies GetMeetingChangesRequest;

  try {
    const data = await api.getMeetingChanges(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **meetingId** | `number` | ID of the meeting | [Defaults to `undefined`] |

### Return type

[**Array&lt;MeetingChangeResource&gt;**](MeetingChangeResource.md)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of changes for the meeting. |  -  |
| **401** | Unauthorized. |  -  |
| **403** | Returns when unauthorized |  -  |
| **404** | Meeting not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMeetings

> Array&lt;Meeting&gt; getMeetings(meetingIds, days, serviceBodyIds, searchString)

Retrieves meetings

Retrieve meetings for authenticated user.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { GetMeetingsRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // string | comma delimited meeting ids (optional)
    meetingIds: 1,2,
    // string | comma delimited day ids between 0-6 (optional)
    days: 0,1,
    // string | comma delimited service body ids (optional)
    serviceBodyIds: 3,4,
    // string | string (optional)
    searchString: Just for Today,
  } satisfies GetMeetingsRequest;

  try {
    const data = await api.getMeetings(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **meetingIds** | `string` | comma delimited meeting ids | [Optional] [Defaults to `undefined`] |
| **days** | `string` | comma delimited day ids between 0-6 | [Optional] [Defaults to `undefined`] |
| **serviceBodyIds** | `string` | comma delimited service body ids | [Optional] [Defaults to `undefined`] |
| **searchString** | `string` | string | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;Meeting&gt;**](Meeting.md)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of meetings. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRootServer

> RootServer getRootServer(rootServerId)

Retrieves a root server

Retrieve a single root server id.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { GetRootServerRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const api = new RootServerApi();

  const body = {
    // number | ID of root server
    rootServerId: 1,
  } satisfies GetRootServerRequest;

  try {
    const data = await api.getRootServer(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **rootServerId** | `number` | ID of root server | [Defaults to `undefined`] |

### Return type

[**RootServer**](RootServer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. |  -  |
| **404** | Returns when no root server exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRootServers

> Array&lt;RootServer&gt; getRootServers()

Retrieves root servers

Retrieve root servers.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { GetRootServersRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const api = new RootServerApi();

  try {
    const data = await api.getRootServers();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;RootServer&gt;**](RootServer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. |  -  |
| **404** | Returns when aggregator mode is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getServiceBodies

> Array&lt;ServiceBody&gt; getServiceBodies()

Retrieves service bodies

Retrieve service bodies for authenticated user.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { GetServiceBodiesRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  try {
    const data = await api.getServiceBodies();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;ServiceBody&gt;**](ServiceBody.md)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns when user is authenticated. |  -  |
| **401** | Returns when not authenticated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getServiceBody

> ServiceBody getServiceBody(serviceBodyId)

Retrieves a service body

Retrieve a single service body by id.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { GetServiceBodyRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of service body
    serviceBodyId: 1,
  } satisfies GetServiceBodyRequest;

  try {
    const data = await api.getServiceBody(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **serviceBodyId** | `number` | ID of service body | [Defaults to `undefined`] |

### Return type

[**ServiceBody**](ServiceBody.md)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns when user is authenticated. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **404** | Returns when no service body exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSettings

> SettingsObject getSettings()

Retrieves all settings

Retrieve all server settings. Only accessible to server administrators.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { GetSettingsRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  try {
    const data = await api.getSettings();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SettingsObject**](SettingsObject.md)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns when user is authenticated as admin. |  -  |
| **401** | Returns when not authenticated |  -  |
| **403** | Returns when user is not an admin |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUser

> User getUser(userId)

Retrieves a single user

Retrieve single user.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { GetUserRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of user
    userId: 1,
  } satisfies GetUserRequest;

  try {
    const data = await api.getUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | `number` | ID of user | [Defaults to `undefined`] |

### Return type

[**User**](User.md)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns when user is authenticated. |  -  |
| **401** | Returns when not authenticated. |  -  |
| **404** | Returns when no user exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsers

> Array&lt;User&gt; getUsers()

Retrieves users

Retrieve users for authenticated user.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { GetUsersRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  try {
    const data = await api.getUsers();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;User&gt;**](User.md)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns when user is authenticated. |  -  |
| **401** | Returns when not authenticated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partialUpdateUser

> partialUpdateUser(userId, userPartialUpdate)

Patches a user

Patches a user by id.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { PartialUpdateUserRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of user
    userId: 1,
    // UserPartialUpdate | Pass in fields you want to update.
    userPartialUpdate: ...,
  } satisfies PartialUpdateUserRequest;

  try {
    const data = await api.partialUpdateUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | `number` | ID of user | [Defaults to `undefined`] |
| **userPartialUpdate** | [UserPartialUpdate](UserPartialUpdate.md) | Pass in fields you want to update. | |

### Return type

`void` (Empty response body)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Success. |  -  |
| **401** | Returns when not authenticated |  -  |
| **403** | Returns when unauthorized |  -  |
| **404** | Returns when no user exists. |  -  |
| **422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchFormat

> patchFormat(formatId, formatPartialUpdate)

Patches a format

Patches a single format by id.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { PatchFormatRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of format
    formatId: 1,
    // FormatPartialUpdate | Pass in fields you want to update.
    formatPartialUpdate: ...,
  } satisfies PatchFormatRequest;

  try {
    const data = await api.patchFormat(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **formatId** | `number` | ID of format | [Defaults to `undefined`] |
| **formatPartialUpdate** | [FormatPartialUpdate](FormatPartialUpdate.md) | Pass in fields you want to update. | |

### Return type

`void` (Empty response body)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Success. |  -  |
| **401** | Returns when not authenticated |  -  |
| **403** | Returns when unauthorized |  -  |
| **404** | Returns when no format exists. |  -  |
| **422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchMeeting

> patchMeeting(meetingId, meetingPartialUpdate, skipVenueTypeLocationValidation)

Patches a meeting

Patches a meeting by id

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { PatchMeetingRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of meeting
    meetingId: 1,
    // MeetingPartialUpdate | Pass in fields you want to update.
    meetingPartialUpdate: ...,
    // boolean | specify true to skip venue type location validation (optional)
    skipVenueTypeLocationValidation: true,
  } satisfies PatchMeetingRequest;

  try {
    const data = await api.patchMeeting(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **meetingId** | `number` | ID of meeting | [Defaults to `undefined`] |
| **meetingPartialUpdate** | [MeetingPartialUpdate](MeetingPartialUpdate.md) | Pass in fields you want to update. | |
| **skipVenueTypeLocationValidation** | `boolean` | specify true to skip venue type location validation | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Success. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **403** | Returns when user is unauthorized to perform action. |  -  |
| **404** | Returns when no meeting exists. |  -  |
| **422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchServiceBody

> patchServiceBody(serviceBodyId, serviceBodyPartialUpdate)

Patches a service body

Patches a single service body by id.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { PatchServiceBodyRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of service body
    serviceBodyId: 1,
    // ServiceBodyPartialUpdate | Pass in fields you want to update.
    serviceBodyPartialUpdate: ...,
  } satisfies PatchServiceBodyRequest;

  try {
    const data = await api.patchServiceBody(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **serviceBodyId** | `number` | ID of service body | [Defaults to `undefined`] |
| **serviceBodyPartialUpdate** | [ServiceBodyPartialUpdate](ServiceBodyPartialUpdate.md) | Pass in fields you want to update. | |

### Return type

`void` (Empty response body)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Success. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **403** | Returns when user is unauthorized to perform action. |  -  |
| **404** | Returns when no service body exists. |  -  |
| **422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFormat

> updateFormat(formatId, formatUpdate)

Updates a format

Updates a format.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { UpdateFormatRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of format
    formatId: 1,
    // FormatUpdate | Pass in format object
    formatUpdate: ...,
  } satisfies UpdateFormatRequest;

  try {
    const data = await api.updateFormat(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **formatId** | `number` | ID of format | [Defaults to `undefined`] |
| **formatUpdate** | [FormatUpdate](FormatUpdate.md) | Pass in format object | |

### Return type

`void` (Empty response body)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Success. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **403** | Returns when user is unauthorized to perform action. |  -  |
| **404** | Returns when no format exists. |  -  |
| **422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateMeeting

> updateMeeting(meetingId, meetingUpdate)

Updates a meeting

Updates a meeting.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { UpdateMeetingRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of meeting
    meetingId: 1,
    // MeetingUpdate | Pass in meeting object
    meetingUpdate: ...,
  } satisfies UpdateMeetingRequest;

  try {
    const data = await api.updateMeeting(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **meetingId** | `number` | ID of meeting | [Defaults to `undefined`] |
| **meetingUpdate** | [MeetingUpdate](MeetingUpdate.md) | Pass in meeting object | |

### Return type

`void` (Empty response body)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Success. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **403** | Returns when user is unauthorized to perform action. |  -  |
| **404** | Returns when no meeting exists. |  -  |
| **422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateServiceBody

> updateServiceBody(serviceBodyId, serviceBodyUpdate)

Updates a Service Body

Updates a single service body.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { UpdateServiceBodyRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of service body
    serviceBodyId: 1,
    // ServiceBodyUpdate | Pass in service body object
    serviceBodyUpdate: ...,
  } satisfies UpdateServiceBodyRequest;

  try {
    const data = await api.updateServiceBody(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **serviceBodyId** | `number` | ID of service body | [Defaults to `undefined`] |
| **serviceBodyUpdate** | [ServiceBodyUpdate](ServiceBodyUpdate.md) | Pass in service body object | |

### Return type

`void` (Empty response body)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Success. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **403** | Returns when user is unauthorized to perform action. |  -  |
| **404** | Returns when no service body exists. |  -  |
| **422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSettings

> updateSettings(settingsUpdate)

Update settings

Updates one or more server settings. Only accessible to server administrators.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { UpdateSettingsRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // SettingsUpdate | Pass in settings object with values to update
    settingsUpdate: ...,
  } satisfies UpdateSettingsRequest;

  try {
    const data = await api.updateSettings(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **settingsUpdate** | [SettingsUpdate](SettingsUpdate.md) | Pass in settings object with values to update | |

### Return type

`void` (Empty response body)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Success. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **403** | Returns when user is not an admin. |  -  |
| **422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateUser

> updateUser(userId, userUpdate)

Update single user

Updates a user.

### Example

```ts
import {
  Configuration,
  RootServerApi,
} from 'bmlt-server-client';
import type { UpdateUserRequest } from 'bmlt-server-client';

async function example() {
  console.log("🚀 Testing bmlt-server-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: bmltToken password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new RootServerApi(config);

  const body = {
    // number | ID of user
    userId: 1,
    // UserUpdate | Pass in user object
    userUpdate: ...,
  } satisfies UpdateUserRequest;

  try {
    const data = await api.updateUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | `number` | ID of user | [Defaults to `undefined`] |
| **userUpdate** | [UserUpdate](UserUpdate.md) | Pass in user object | |

### Return type

`void` (Empty response body)

### Authorization

[bmltToken password](../README.md#bmltToken-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Success. |  -  |
| **401** | Returns when user is not authenticated. |  -  |
| **403** | Returns when user is unauthorized to perform action. |  -  |
| **404** | Returns when no user exists. |  -  |
| **422** | Validation error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

