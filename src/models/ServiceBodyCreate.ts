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
 * @interface ServiceBodyCreate
 */
export interface ServiceBodyCreate {
    /**
     * 
     * @type {number}
     * @memberof ServiceBodyCreate
     */
    parentId: number | null;
    /**
     * 
     * @type {string}
     * @memberof ServiceBodyCreate
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceBodyCreate
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceBodyCreate
     */
    type: string;
    /**
     * 
     * @type {number}
     * @memberof ServiceBodyCreate
     */
    adminUserId: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof ServiceBodyCreate
     */
    assignedUserIds: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof ServiceBodyCreate
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceBodyCreate
     */
    helpline?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceBodyCreate
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceBodyCreate
     */
    worldId?: string;
}

/**
 * Check if a given object implements the ServiceBodyCreate interface.
 */
export function instanceOfServiceBodyCreate(value: object): value is ServiceBodyCreate {
    if (!('parentId' in value) || value['parentId'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('adminUserId' in value) || value['adminUserId'] === undefined) return false;
    if (!('assignedUserIds' in value) || value['assignedUserIds'] === undefined) return false;
    return true;
}

export function ServiceBodyCreateFromJSON(json: any): ServiceBodyCreate {
    return ServiceBodyCreateFromJSONTyped(json, false);
}

export function ServiceBodyCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceBodyCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'parentId': json['parentId'],
        'name': json['name'],
        'description': json['description'],
        'type': json['type'],
        'adminUserId': json['adminUserId'],
        'assignedUserIds': json['assignedUserIds'],
        'url': json['url'] == null ? undefined : json['url'],
        'helpline': json['helpline'] == null ? undefined : json['helpline'],
        'email': json['email'] == null ? undefined : json['email'],
        'worldId': json['worldId'] == null ? undefined : json['worldId'],
    };
}

export function ServiceBodyCreateToJSON(json: any): ServiceBodyCreate {
    return ServiceBodyCreateToJSONTyped(json, false);
}

export function ServiceBodyCreateToJSONTyped(value?: ServiceBodyCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'parentId': value['parentId'],
        'name': value['name'],
        'description': value['description'],
        'type': value['type'],
        'adminUserId': value['adminUserId'],
        'assignedUserIds': value['assignedUserIds'],
        'url': value['url'],
        'helpline': value['helpline'],
        'email': value['email'],
        'worldId': value['worldId'],
    };
}

