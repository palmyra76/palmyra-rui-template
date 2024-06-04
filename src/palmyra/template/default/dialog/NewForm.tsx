import { PalmyraForm, usePalmyraNewForm } from "palmyra-rui";
import { IFormNewInput } from "../../Types";
import { FC, useRef, useState } from "react";
import { Done, Close } from '@mui/icons-material';
import { Button } from "@mui/material";
import { toast } from 'react-toastify';
import { IFormletInput } from "../grid/SummaryDialogGrid";

interface IDrawerNewInput extends IFormNewInput {
    onSave: Function
    onClose: () => void,
    FORMLET: FC<IFormletInput>,
    errorText?: any
}

function NewForm(props: IDrawerNewInput) {
    const errorText = props.errorText;
    const onClose = props.onClose;
    const FORMLET = props.FORMLET;
    const [isValid, setValid] = useState<boolean>(false);
    const storeFactory = props.storeFactory;
    const action = useRef<string>('none');

    const formListener: any = {
        //@ts-ignore
        onSaveSuccess: function (data: any): void {
            if (action.current == 'new') {
                props.onSave(true, true, {})
            } else
                props.onSave(true, false, {});
        },
        onSaveFailure: function (e: any): void {
            console.error('Error while saving', e);
        },
        onChange: function (): void {
        }
    };
    //@ts-ignore
    const pageName = props.pageName;

    const { data, saveData, formRef } = usePalmyraNewForm({
        formListener, initialData: {},
        storeFactory, endPoint: props.options.endPoint
    })

    const showServerErrorToast = () => {
        toast.error("Something went wrong Please try again later.. ")
    }
    const showUniqueErrorToast = () => {
        if (errorText) {
            toast.error(errorText);
        } else {
            toast.error("Data Already Exit");
        }
    };

    const saveForm = (a: string) => {
        action.current = a;
        const s = saveData();
        s.then((_d: any) => {
            onClose();
        }).catch((e) => {
            if (e.response && e.response.status === 400) {
                showUniqueErrorToast()
            } else if (e.response && e.response.status === 500) {
                showServerErrorToast()
            }
        });
    }

    const handleKeyPress = (event: any) => {
        if (event.ctrlKey && event.key === 'b') {
            event.preventDefault();
            if (isValid) {
                saveForm('new');
            }
        }
        if (event.ctrlKey && event.key === 's') {
            event.preventDefault();
            if (isValid) {
                saveForm('close');
            }
        }
    };
    return (
        <div className='palmyra-dialog-form-container'>
            <div className='palmyra-dialog-form-header-container'>
                <div className="palmyra-dialog-header-text-container">
                    <span className="palmyra-dialog-header-text">{props.title}</span>
                </div>
                <div className="dialog-header-icon-container">
                    <Close onClick={onClose} className="dialog-cancel-icon" />
                </div>
            </div>
            <form onKeyDown={handleKeyPress}>
                <div className="palmyra-dialog-content-container">
                    <PalmyraForm formData={data} mode="new" onValidChange={setValid}
                        customizer={props.customizer} ref={formRef} storeFactory={storeFactory}>
                        <FORMLET formData={{}} />
                    </PalmyraForm>
                </div>
                <div className="palmyra-dialog-btn-container">
                    <Button tabIndex={-1}
                        className='cancel-filled-button'
                        onClick={onClose}>
                        <Close className="button-icon" />
                        Cancel
                    </Button>
                    <Button disabled={!isValid}
                        className={!isValid ? 'disabled-button save-new-btn' : 'filled-button save-new-btn'}
                        onClick={() => saveForm('new')}>
                        <Done className="button-icon" />
                        <u style={{ width: '5px' }}>S</u>ave
                    </Button>
                </div>
            </form>
        </div >
    );
}
export default NewForm;