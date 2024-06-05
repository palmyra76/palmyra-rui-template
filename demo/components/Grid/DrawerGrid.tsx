import { SummaryDrawerGrid } from "../../../src/palmyra/template/default/grid/SummaryDrawerGrid";
import { ColumnDefinition, FieldGroupContainer, MuiTextField } from "palmyra-rui";
import storeFactory from "../Wire/StoreFactory";


function DrawerGrid(props: any) {

    const fields: ColumnDefinition[] = [
        {
            attribute: "name",
            name: "District",
            title: "District",
            searchable: true,
            sortable: true,
            type: "string"
        },
        // {
        //     attribute: "population",
        //     name: "Population",
        //     title: "Population",
        //     searchable: true,
        //     sortable: true,
        //     type: "number"
        // }
    ];


    const Formlet = () => {

        return (<>
            <FieldGroupContainer>
                <MuiTextField attribute="name" label="District" />
                {/* <MuiNumberField attribute="population" label="Population" /> */}
            </FieldGroupContainer>
        </>)
    }

    return (
        <SummaryDrawerGrid
            NewFormlet={Formlet} EditFormlet={Formlet}
            storeFactory={storeFactory}
            fields={fields}
            pageName={props.pageName}
            title={"Summary Drawer Grid"}
            options={{ endPoint: '/masterdata/district' }} />
    );
}

export default DrawerGrid;