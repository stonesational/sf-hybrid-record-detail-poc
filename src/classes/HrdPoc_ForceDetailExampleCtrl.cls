/*------------------------------------------------------------
Lightning Component Controller to retrieve the SF ID of an Object's Details External Object

Components Using: HrdPoc_ForceDetailExample

History
<Date>       <Authors Name>     <Brief Description of Change>
10-May-2018  Jason Stone		POC
------------------------------------------------------------*/

public class HrdPoc_ForceDetailExampleCtrl {
	
    /*------------------------------------------------------------
	Look up the SF ID of the detail external object based on ECN

	@param argParentSfId SF ID of the object
	@return SF ID of the details external object
	------------------------------------------------------------*/
    @AuraEnabled
    public static String getDetailsSfRecordId(String argParentSfId) {
        String ecn = [SELECT ecn__c FROM Policy_Header__c WHERE Id = :argParentSfId LIMIT 1][0].ecn__c;
        return [SELECT Id FROM PolicyDetails__x where ecn__c = :ecn LIMIT 1][0].Id;
    } 
}