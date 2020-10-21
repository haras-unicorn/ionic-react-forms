import * as R from 'ramda';
import React from 'react';
import { IonButton } from '@ionic/react';

type Props =
        {
            children?: React.ReactNode
        } &
        Omit<React.ComponentProps<typeof IonButton>, 'type'>

const ImagePicker: React.FC<Props> = (props: React.PropsWithChildren<Props>) =>
{
    return (
            <IonButton {...R.omit(['children'], props)} type="button">
                {props.children}
            </IonButton>
    );
};

export default React.memo(ImagePicker);
