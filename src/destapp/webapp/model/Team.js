sap.ui.define([
    "sap/spb/base/ODataEntity"
], function (ManagedObject) {
    "use strict";

    /**
     */
    return ManagedObject.extend("tinyapp2.model.Team",  {

        metadata: {
            properties: {
                teamId: {
                    type: "int",
                    oDataName: "TeamId"
                },
                name: {
                    type: "string",
                    oDataName: "Name"
                },
                leagueId: {
                    type: "int",
                    oDataName: "LeagueId"
                }
            }          
        }

    });

});