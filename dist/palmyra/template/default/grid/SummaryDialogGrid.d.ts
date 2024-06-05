import { ISummaryGridInput } from '../../Types';
import { FC } from 'react';

interface IFormletInput {
    formData: any;
}
interface IDialogGridInput extends ISummaryGridInput {
    EditFormlet?: FC;
    NewFormlet?: FC<IFormletInput>;
    defaultParams?: any;
    Child?: FC;
    childProps?: Record<any, any>;
    customizer?: any;
    gridRef?: any;
    errorText?: any;
    customButton?: any;
    title?: any;
    dialogeTitle?: any;
    width?: string;
    height?: string;
    minWidth?: string;
}
declare function SummaryDialogGrid(props: IDialogGridInput): import("react/jsx-runtime").JSX.Element;
export type { IFormletInput };
export { SummaryDialogGrid };
