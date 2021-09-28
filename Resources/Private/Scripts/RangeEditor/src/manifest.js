import manifest from "@neos-project/neos-ui-extensibility";

import RangeEditor from "./RangeEditor";

manifest("Shel.Neos.RangeEditor:RangeEditor", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");

    editorsRegistry.set("Shel.Neos.RangeEditor/RangeEditor", {
        component: RangeEditor,
    });
});
