import { ISummaryGridInput } from '../../Types';

interface IGridInput extends ISummaryGridInput {
    customizer?: any;
    gridRef?: any;
    customButton?: any;
    title?: any;
    disableViewTopic?: any;
}
declare function SummaryGrid(props: IGridInput): import("react/jsx-runtime").JSX.Element;
export { SummaryGrid };
