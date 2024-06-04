import ViewForm from "../../../src/palmyra/template/default/form/ViewForm";
import { MuiTextField } from "palmyra-rui";
import { useParams } from "react-router-dom";
import storeFactory from "../Wire/StoreFactory";


const SummaryGridViewForm = () => {
    const params: any = useParams();

    return (<>
        <ViewForm id={params.id} options={{ endPoint: '/masterdata/district' }} pageName="" storeFactory={storeFactory} title="View Form">
            <MuiTextField attribute="name" label="District" />
            {/* <MuiNumberField attribute="population" label="Population" /> */}
        </ViewForm>
    </>)

}

export default SummaryGridViewForm;