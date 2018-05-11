({
	doInit : function(component) {
		var recordId = component.get("v.recordId");
        console.log("***RecordId: " + recordId);

		var action = component.get("c.getDetailsSfRecordId");
        action.setParams({
        	argParentSfId : recordId
        });
        console.log("***After Params");
        action.setCallback(this, function(response) {
            console.log("***Response Returned");

            var state = response.getState();
            if(state === "SUCCESS"){
                console.log("***Id Returned: " + response.getReturnValue());
                component.set("v.detailsId", response.getReturnValue());
            }
            else if(state === "INCOMPLETE") {
                console.log('***INCOMPLETE');
            }
            else if(state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("***Error message: " + errors[0].message);
                    }
                } else {
                    alert("***ERROR: Unknown error");
                }
            }
        });
        $A.enqueueAction(action);

	}
})