/* tslint:disable */
/* eslint-disable */
/**
 * BMLT
 * BMLT Admin API Documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ServerError
 */
export interface ServerError {
    /**
     * 
     * @type {string}
     * @memberof ServerError
     */
    message: string;
}

/**
 * Check if a given object implements the ServerError interface.
 */
export function instanceOfServerError(value: object): value is ServerError {
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function ServerErrorFromJSON(json: any): ServerError {
    return ServerErrorFromJSONTyped(json, false);
}

export function ServerErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServerError {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function ServerErrorToJSON(json: any): ServerError {
    return ServerErrorToJSONTyped(json, false);
}

export function ServerErrorToJSONTyped(value?: ServerError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
    };
}

