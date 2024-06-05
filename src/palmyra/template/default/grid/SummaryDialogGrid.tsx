import { PalmyraGrid, topic } from "palmyra-rui";
import { ISummaryGridInput } from "../../Types";
import { FC, useEffect, useRef, useState } from "react";
import { NewForm } from "../drawer/NewForm";
import { EditForm } from "../drawer/EditForm";
import { Dialog } from '@mui/material';
import { GridDialog } from "../dialog/GridDialog";

interface IFormletInput {
    formData: any
}

interface IDialogGridInput extends ISummaryGridInput {
    EditFormlet?: FC,
    NewFormlet?: FC<IFormletInput>,
    defaultParams?: any,
    Child?: FC,
    childProps?: Record<any, any>,
    customizer?: any,
    gridRef?: any,
    errorText?: any,
    customButton?: any,
    title?: any,
    dialogeTitle?: any,
    width?: string,
    height?: string,
    minWidth?: string
}

function SummaryDialogGrid(props: IDialogGridInput) {
    const height = props.height || 'auto';
    const width = props.width || 'auto';
    const minWidth = props.minWidth || '600px';

    const storeFactory = props.storeFactory;
    const viewTopic = props.pageName + "/viewPage";
    const newTopic = props.pageName + "/newPage";
    const refreshTopic = props.pageName + "/refresh";
    const title: any = props.title;
    const dialogeTitle = props.dialogeTitle ? props.dialogeTitle : title;
    const formattedTitle = (dialogeTitle === dialogeTitle.toUpperCase())
        ? capitalizeWords(dialogeTitle.toLowerCase())
        : dialogeTitle;

    function capitalizeWords(str: string): string {
        return str.replace(/\b\w/g, match => match.toUpperCase());
    }

    const [data, setData] = useState<any>({});
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const referenceCount = useRef<number>(0);

    const Child = props.Child;
    const EditFormlet = props.EditFormlet;
    const NewFormlet = props.NewFormlet;
    const gridRef: any = props.gridRef || useRef(null);

    const actionOptions = {
        onClick: {
            topic: viewTopic
        },
        newRecord: {
            topic: newTopic
        }
    };

    useEffect(() => {
        if (EditFormlet) {
            var viewPageHandle = topic.subscribe(viewTopic, (_topicName, data) => {
                setData(data);
                setDialogOpen(true);
            });
        }

        var refreshHandle = topic.subscribe(refreshTopic, (_topicName) => {
            console.log('refresh called', gridRef.current)
            if (gridRef.current)
                gridRef.current.refresh();
        });

        var newPageHandle = topic.subscribe(newTopic, (_topicName, data) => {
            setData(data);
            setDialogOpen(true);
        });
        return () => {
            if (viewPageHandle) {
                topic.unsubscribe(viewPageHandle);
            }
            topic.unsubscribe(newPageHandle);
            topic.unsubscribe(refreshHandle);
        }

    }, [data]);


    const closeDrawer = (refreshGrid: boolean, open: boolean = false, data?: any) => {
        setDialogOpen(open);
        referenceCount.current += 1;
        setData(data);
        if (refreshGrid) {
            gridRef.current.refresh();
        }
    }

    const handleClose = () => {
        closeDrawer(false);
    }

    return (<>
        <div className='grid-renderer-container'>
            <div className="palmyra-grid-container summary-drawer-grid">
                <PalmyraGrid title={title} columns={props.fields} endPoint={props.options.endPoint} pagination={props.pagination}
                    actions={actionOptions} ref={gridRef} customizer={props.customizer} customButton={props.customButton}
                    defaultParams={props.defaultParams}
                    layoutParams={{}} storeFactory={storeFactory} exportOptions={props.exportOptions} densityOption={props.densityOptions} />
            </div>
        </div>
        <Dialog className="grid-dialog"
            open={dialogOpen} onClose={() => closeDrawer(false)}
            PaperProps={{
                sx: {
                    width: width, minWidth: minWidth, height: height, borderRadius: '15px', padding: '10px', maxWidth: width
                }
            }}
        >
            {dialogOpen &&
                (Child ? <GridDialog onClose={() => closeDrawer(false)} Child={Child}
                    childProps={props.childProps} dialogeTitle={dialogeTitle} />
                    : (data?.id && EditFormlet) ?
                        <EditForm onSave={(refresh = true, drawerOpen = false, newData?: any) => closeDrawer(refresh, drawerOpen, newData)} id={data.id} onClose={handleClose}
                            options={props.options} pageName={props.pageName} FORMLET={EditFormlet} storeFactory={props.storeFactory}
                            title={"Edit " + formattedTitle} key={(referenceCount.current + 5) + ''} />
                        :
                        <NewForm onSave={(refresh = true, drawerOpen = false, newData?: any) => closeDrawer(refresh, drawerOpen, newData)} onClose={handleClose}
                            options={props.options} pageName={props.pageName} FORMLET={NewFormlet} storeFactory={props.storeFactory}
                            title={"New " + formattedTitle} errorText={props.errorText} key={(referenceCount.current + 2) + ''} />)
            }
        </Dialog>
    </>
    );
}

export type { IFormletInput }
export { SummaryDialogGrid };