import * as R from 'ramda';
import { entries } from '../adapters/typescript/entry';

import React from 'react';
import { useFormContext } from 'react-hook-form';

import { IonText } from '@ionic/react';


type Props =
        {
            itemName?: string

            children?: React.ReactNode
        } &
        React.ComponentProps<typeof IonText>

// TODO: fix error with keys
const ErrorText: React.FC<Props> = (props: React.PropsWithChildren<Props>) =>
{
    const formContext = useFormContext();

    return props.itemName ?
           (
                   // TODO: put this in another component that memoizes for certain fields.
                   formContext.errors && formContext.errors[props.itemName] ?
                   <IonText color="danger"
                            {...props}>
                       <p>
                           {formContext.errors[props.itemName].message}
                       </p>
                       {props.children}
                   </IonText> :
                   null
           ) :
           <IonText color="danger" {...R.omit(['itemName', 'children'], props)}>
               {
                   R.map((error: R.KeyValuePair<any, any>) => <p key={error[0]}>{error[1].message}</p>,
                           entries(formContext.errors))
               }
               {props.children}
           </IonText>;
};

export default React.memo(ErrorText);

export const isErrorText = (test: React.ReactNode): test is React.ReactComponentElement<typeof ErrorText> =>
        (test as React.ReactElement)?.props?.itemName !== undefined;
