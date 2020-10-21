import * as R from 'ramda';

import React from 'react';

import { IonImg } from '@ionic/react';


type Props =
        {
            dataUrl: string
        } & Omit<React.ComponentProps<typeof IonImg>, 'src'>

const Image: React.FC<Props> = (props: Props) =>
        <IonImg {...R.omit(['dataUrl'], props)} src={props.dataUrl}/>;

// Don't memo because you don't want to check if two dataUrl's are equal.
export default Image;
