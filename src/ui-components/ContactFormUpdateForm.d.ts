/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactFormUpdateFormInputValues = {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
};
export declare type ContactFormUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactFormUpdateFormOverridesProps = {
    ContactFormUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactFormUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContactFormUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contactForm?: any;
    onSubmit?: (fields: ContactFormUpdateFormInputValues) => ContactFormUpdateFormInputValues;
    onSuccess?: (fields: ContactFormUpdateFormInputValues) => void;
    onError?: (fields: ContactFormUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactFormUpdateFormInputValues) => ContactFormUpdateFormInputValues;
    onValidate?: ContactFormUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContactFormUpdateForm(props: ContactFormUpdateFormProps): React.ReactElement;
