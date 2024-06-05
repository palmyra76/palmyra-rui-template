import { IFormNewInput } from '../../Types';
import { FC } from 'react';
import { IFormletInput } from '../grid/SummaryDialogGrid';

interface IDrawerNewInput extends IFormNewInput {
    onSave: Function;
    onClose: () => void;
    FORMLET: FC<IFormletInput>;
    errorText?: any;
}
declare function NewForm(props: IDrawerNewInput): import("react/jsx-runtime").JSX.Element;
export { NewForm };
