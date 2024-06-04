import SummaryGrid from "../../../src/palmyra/template/default/grid/SummaryGrid.tsx";
import { ColumnDefinition } from "palmyra-rui";
import storeFactory from "../Wire/StoreFactory";


function Grid(props: any) {
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

    return (
        <SummaryGrid
            storeFactory={storeFactory}
            fields={fields}
            pageName={props.pageName}
            title={"Summary Grid"}
            options={{ endPoint: '/masterdata/district' }} />
    );
}

export default Grid;