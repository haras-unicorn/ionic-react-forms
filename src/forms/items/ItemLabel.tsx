import * as R from 'ramda';

import React from 'react';

import { IonLabel } from '@ionic/react';


type Props =
        {
            children?: React.ReactNode
        } & React.ComponentProps<typeof IonLabel>

const ItemLabel: React.FC<Props> = (props: React.PropsWithChildren<Props>) =>
{
    return (
            <IonLabel {...R.omit(['children'], props)}>
                {props.children}
            </IonLabel>
    );
};

export default React.memo(ItemLabel);
