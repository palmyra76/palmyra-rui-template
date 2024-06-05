import { IFormEditInput } from '../../Types';
import { FC } from 'react';
import { IFormletInput } from '../grid/SummaryDrawerGrid';

interface IDrawerEditInput extends IFormEditInput {
    onSave: Function;
    onClose: () => void;
    FORMLET: FC<IFormletInput>;
    errorText?: any;
}
declare function EditForm(props: IDrawerEditInput): import("react/jsx-runtime").JSX.Element;
export { EditForm };
