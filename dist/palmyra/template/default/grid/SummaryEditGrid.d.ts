import { ITitle } from 'palmyra-rui';
import { ISummaryGridInput } from '../../Types';
import { FC } from 'react';
import { IFormletInput } from './SummaryDialogGrid';

interface EditGridProps extends ISummaryGridInput {
    dialog?: boolean;
    customizer?: any;
    formTitle?: ITitle;
    NewFormlet?: FC<IFormletInput>;
    gridRef?: any;
    minWidth?: string;
    fullScreen?: boolean;
    width?: string;
    height?: string;
}
declare function SummaryEditGrid(props: EditGridProps): import("react/jsx-runtime").JSX.Element;
export { SummaryEditGrid };
