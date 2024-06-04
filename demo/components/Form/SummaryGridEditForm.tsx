import EditForm from "../../../src/palmyra/template/default/form/EditForm";
import { MuiTextField } from "palmyra-rui";
import { useParams } from "react-router-dom";
import storeFactory from "../Wire/StoreFactory";


const SummaryGridEditForm = () => {
    const params: any = useParams();

    return (<>
        <EditForm id={params.id} options={{ endPoint: '/masterdata/district' }} pageName="" storeFactory={storeFactory} title="Edit Form">
            <MuiTextField attribute="name" label="District" />
            {/* <MuiNumberField attribute="population" label="Population" /> */}
        </EditForm>
    </>)

}

export default SummaryGridEditForm;