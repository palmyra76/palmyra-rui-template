import NewForm from "../../../src/palmyra/template/default/form/NewForm";
import { MuiTextField } from "palmyra-rui";
import storeFactory from "../Wire/StoreFactory";


const SummaryGridNewForm = () => {

    return (<>
        <NewForm options={{ endPoint: '/masterdata/district' }} pageName="" storeFactory={storeFactory} title="New Form">
            <MuiTextField attribute="name" label="District" />
            {/* <MuiNumberField attribute="population" label="Population" /> */}
        </NewForm>
    </>)

}

export default SummaryGridNewForm;