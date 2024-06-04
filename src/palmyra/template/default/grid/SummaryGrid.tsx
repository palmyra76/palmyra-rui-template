import { PalmyraGrid, StringFormat, topic } from "palmyra-rui";
import { ISummaryGridInput } from "../../Types";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface IGridInput extends ISummaryGridInput {
    customizer?: any,
    gridRef?: any,
    customButton?: any,
    title?: any,
    disableViewTopic?: any
}

function SummaryGrid(props: IGridInput) {
    const fields = props.fields;
    const storeFactory = props.storeFactory;

    const navigate = useNavigate();
    const viewTopic = props.pageName + "/viewPage";
    const newTopic = props.pageName + "/newPage";
    const refreshTopic = props.pageName + "/refresh";
    const idKey = props.options.idProperty || 'id';
    const gridRef: any = props.gridRef || useRef(null);

    const actionOptions = props.disableViewTopic ? {
        newRecord: {
            topic: newTopic
        }
    } : {
        onClick: {
            topic: viewTopic
        },
        newRecord: {
            topic: newTopic
        }
    };

    useEffect(() => {
        //@ts-ignore
        if (!props.disableViewTopic) {
            var viewPageHandle = topic.subscribe<any>(viewTopic, (_topicName, data) => {
                data.id = data[idKey];
                navigate(StringFormat('view/{id}', data));
            });
        }
        //@ts-ignore
        var newPageHandle = topic.subscribe(newTopic, (topicName, data) => {
            navigate(StringFormat('new', data));
        });

        var refreshHandle = topic.subscribe(refreshTopic, (_topicName) => {
            console.log('refresh called', gridRef.current)
            if (gridRef.current)
                gridRef.current.refresh();
        })

        return () => {
            if (viewPageHandle) {
                topic.unsubscribe(viewPageHandle);
            }
            topic.unsubscribe(newPageHandle);
            topic.unsubscribe(refreshHandle);
        }
    }, [idKey, fields]);

    return (
        <div className='grid-renderer-container'>
            <div className="palmyra-grid-container summary-grid">
                <PalmyraGrid columns={fields} ref={gridRef} title={props.title} densityOption={props.densityOptions}
                    actions={actionOptions} pagination={props.pagination} exportOptions={props.exportOptions}
                    endPoint={props.options.endPoint} customizer={props.customizer}
                    layoutParams={{}} storeFactory={storeFactory} customButton={props.customButton} />
            </div>
        </div>
    );
}
export default SummaryGrid;