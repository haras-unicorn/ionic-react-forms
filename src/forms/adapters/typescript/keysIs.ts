import * as R from 'ramda';


// noinspection JSUnusedGlobalSymbols
export default keysIs;

// noinspection JSUnusedGlobalSymbols
export function keysIs<Any, To extends Any>(keys: (keyof To)[], any: Any): any is To
// noinspection JSUnusedGlobalSymbols
export function keysIs<Any, To extends Any>(keys: (keyof To)[]): (anyCurried: Any) => anyCurried is To

// noinspection JSUnusedGlobalSymbols
export function keysIs<Any, To extends Any>(keys: (keyof To)[], any?: Any)
{
    return any === undefined ?
           (anyCurried: Any) => isInternal<Any, To>(keys, anyCurried) :
           isInternal<Any, To>(keys, any);
}


function isInternal<Any, To extends Any>(keys: (keyof To)[], any: Any): any is To
{
    return R.all(key => key in any, keys);
}
