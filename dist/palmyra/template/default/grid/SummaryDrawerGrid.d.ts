import { ISummaryGridInput } from '../../Types';
import { FC } from 'react';

interface IFormletInput {
    formData: any;
}
interface IDrawerGridInput extends ISummaryGridInput {
    EditFormlet: FC;
    NewFormlet: FC<IFormletInput>;
    customizer?: any;
    gridRef?: any;
    errorText?: any;
    customButton?: any;
    title?: any;
    width?: any;
}
declare function SummaryDrawerGrid(props: IDrawerGridInput): import("react/jsx-runtime").JSX.Element;
export type { IFormletInput };
export { SummaryDrawerGrid };
