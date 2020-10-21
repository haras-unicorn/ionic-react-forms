import * as R from 'ramda';


// noinspection JSUnusedGlobalSymbols
export type KeyOf<Object> =
        Object extends any ?
        KeyOfInternal<Object> :
        never;

// noinspection JSUnusedGlobalSymbols
export type ValueOf<Object> =
        Object extends any ?
        ValueOfInternal<Object> :
        never;

// noinspection JSUnusedGlobalSymbols
export type Entry<Object> =
        Object extends any ?
        EntryInternal<Object> :
        never;


// noinspection JSUnusedGlobalSymbols
export function keys<Object extends object>(object: Object): KeyOf<Object>[]
{
    return R.keys(object) as KeyOf<Object>[];
}

// noinspection JSUnusedGlobalSymbols
export function values<Object extends object>(object: Object): ValueOf<Object>[]
{
    return R.values(object) as ValueOf<Object>[];
}

// noinspection JSUnusedGlobalSymbols
export function entries<Object extends object>(object: Object): Entry<Object>[]
{
    return R.zip(keys(object), values(object)) as Entry<Object>[];
}


type KeyOfInternal<Object> = keyof Object
type ValueOfInternal<Object> = Object[KeyOfInternal<Object>]
type EntryInternal<Object> = [KeyOfInternal<Object>, ValueOfInternal<Object>]
