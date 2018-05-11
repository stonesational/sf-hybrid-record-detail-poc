({
	/*	Get SF ID for the details record from Controller. Assign to v.detailSfId 
	 */
    doInit : function(cmp, event, helper) {     
        var action = cmp.get("c.getDetailsSfRecordId");
        action.setParams({ "argParentSfId": cmp.get("v.recordId") });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.detailSfId", response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
                alert('STONE: INCOMPLETE');
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        alert("Error message: " + errors[0].message);
                    }
                } else {
                    alert("ERROR: Unknown error");
                }
            }
        });
        
        $A.enqueueAction(action);

	}
})