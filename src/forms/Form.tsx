import React from 'react';
import { IonItemGroup } from '@ionic/react';

import { FormProvider, SubmitHandler, useForm, UseFormOptions } from 'react-hook-form';

import SubmitButton from './SubmitButton';


// TODO: add group validation

interface Props<TFields extends Record<string, any>>
{
    formOptions: Omit<UseFormOptions<TFields>, 'mode'>
    onSubmit: SubmitHandler<TFields>
    submitButton: React.ReactComponentElement<typeof SubmitButton>
}

const Form = <TFields extends Record<string, any>>(
        props: React.PropsWithChildren<Props<TFields>>): React.ReactElement =>
{
    const formContext = useForm(
            {
                ...props.formOptions,
                mode: 'onChange'
            });

    return (
            <FormProvider {...formContext}>
                <form onSubmit={formContext.handleSubmit(props.onSubmit)}>

                    <IonItemGroup class="ion-padding-bottom">
                        {props.children}
                    </IonItemGroup>

                    {props.submitButton}
                </form>
            </FormProvider>
    );
};

// TODO: use React.memo when TS introduces higher kinded types
export default Form;
