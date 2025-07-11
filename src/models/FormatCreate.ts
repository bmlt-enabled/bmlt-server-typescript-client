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
import type { FormatTranslation } from './FormatTranslation';
import {
    FormatTranslationFromJSON,
    FormatTranslationFromJSONTyped,
    FormatTranslationToJSON,
    FormatTranslationToJSONTyped,
} from './FormatTranslation';

/**
 * 
 * @export
 * @interface FormatCreate
 */
export interface FormatCreate {
    /**
     * 
     * @type {string}
     * @memberof FormatCreate
     */
    worldId?: string;
    /**
     * 
     * @type {string}
     * @memberof FormatCreate
     */
    type?: string;
    /**
     * 
     * @type {Array<FormatTranslation>}
     * @memberof FormatCreate
     */
    translations: Array<FormatTranslation>;
}

/**
 * Check if a given object implements the FormatCreate interface.
 */
export function instanceOfFormatCreate(value: object): value is FormatCreate {
    if (!('translations' in value) || value['translations'] === undefined) return false;
    return true;
}

export function FormatCreateFromJSON(json: any): FormatCreate {
    return FormatCreateFromJSONTyped(json, false);
}

export function FormatCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormatCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'worldId': json['worldId'] == null ? undefined : json['worldId'],
        'type': json['type'] == null ? undefined : json['type'],
        'translations': ((json['translations'] as Array<any>).map(FormatTranslationFromJSON)),
    };
}

export function FormatCreateToJSON(json: any): FormatCreate {
    return FormatCreateToJSONTyped(json, false);
}

export function FormatCreateToJSONTyped(value?: FormatCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'worldId': value['worldId'],
        'type': value['type'],
        'translations': ((value['translations'] as Array<any>).map(FormatTranslationToJSON)),
    };
}

