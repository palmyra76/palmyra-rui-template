import { ITitle, PalmyraGrid, StringFormat, topic } from "palmyra-rui";
import { ISummaryGridInput } from "../../Types";
import { FC, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IFormletInput } from "./SummaryDialogGrid";
import { Dialog } from '@mui/material';
import { NewForm } from "../dialog/NewForm";

interface EditGridProps extends ISummaryGridInput {
    dialog?: boolean,
    customizer?: any
    formTitle?: ITitle,
    NewFormlet?: FC<IFormletInput>,
    gridRef?: any,
    minWidth?: string,
    fullScreen?: boolean,
    width?: string,
    height?: string
}

function SummaryEditGrid(props: EditGridProps) {
    const [_data, setData] = useState<any>({});
    const [isNewDialogOpen, setIsNewDialogOpen] = useState(false);
    const [_dialogOpen, setDialogOpen] = useState<boolean>(false);

    const gridRef: any = props.gridRef || useRef(null);
    const referenceCount = useRef<number>(0);
    const title = props.title;
    const formattedTitle = (title === title.toUpperCase())
        ? capitalizeWords(title.toLowerCase())
        : title;
    function capitalizeWords(str: string): string {
        return str.replace(/\b\w/g, match => match.toUpperCase());
    }
    const navigate = useNavigate();

    const NewFormlet = props.NewFormlet;
    const fields = props.fields;
    const storeFactory = props.storeFactory;

    const height = props.height || 'auto';
    const width = props.width || 'auto';
    const minWidth = props.minWidth || '600px';

    const editTopic = props.pageName + "/editPage";
    const newTopic = props.pageName + "/newPage";
    const idKey = props.options.idProperty || 'id';

    const actionOptions = {
        onClick: {
            topic: editTopic
        },
        newRecord: {
            topic: newTopic
        }
    }

    useEffect(() => {
        //@ts-ignore
        var editPageHandle = topic.subscribe<any>(editTopic, (topicName, data) => {
            data.id = data[idKey];
            navigate(StringFormat('edit/{id}', data));
        });
        //@ts-ignore
        var newPageHandle = topic.subscribe(newTopic, (topicName, data) => {
            if (props.dialog) {
                setIsNewDialogOpen(true);
            } else {
                navigate(StringFormat('new', data));
            }
        });

        return () => {
            topic.unsubscribe(editPageHandle);
            topic.unsubscribe(newPageHandle);
        }
    }, [idKey, fields]);

    const closeDrawer = (refreshGrid: boolean, open: boolean = false, data?: any) => {
        setDialogOpen(open);
        referenceCount.current += 1;
        setData(data);
        if (refreshGrid) {
            gridRef.current.refresh();
        }
    }
    const handleClose = () => {
        setIsNewDialogOpen(!isNewDialogOpen);
    }


    return (
        <div className='grid-renderer-container'>
            <PalmyraGrid columns={fields}
                actions={actionOptions} ref={gridRef}
                endPoint={props.options.endPoint} customizer={props.customizer}
                pagination={props.pagination} title={props.title}
                layoutParams={{}} storeFactory={storeFactory} densityOption={props.densityOptions} />

            {isNewDialogOpen &&
                <Dialog className="grid-dialog"
                    fullScreen={props.fullScreen}
                    open={isNewDialogOpen} onClose={handleClose}
                    PaperProps={{
                        sx: {
                            width: width, minWidth: minWidth, height: height, borderRadius: '15px', padding: '10px'
                        }
                    }}>
                    <NewForm onSave={(refresh = true, drawerOpen = false, newData?: any) => closeDrawer(refresh, drawerOpen, newData)} onClose={handleClose}
                        options={props.options} pageName={props.pageName} FORMLET={NewFormlet} storeFactory={props.storeFactory}
                        title={"New " + formattedTitle} key={(referenceCount.current + 2) + ''} />
                </Dialog>
            }
        </div>
    );
}
export { SummaryEditGrid };