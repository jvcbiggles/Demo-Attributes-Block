/*
Lucid Generated Code
*/
function lucidDebug(uid,event) {
	try{
event.allAttributes_Lucid = "";
 for(var propertyName in event) {event.allAttributes_Lucid += propertyName+",";}		window.LucidWebPreviewDelegate.javascriptFunctionEntered_withEvent_(uid,event);
	} catch(err) { }
}


function lucidLog(uid,value) {
	try{
		console.log(value);
		window.LucidWebPreviewDelegate.lucidLog_withValue_(uid,value);
	} catch(err) { }
}




$(document).ready(function() {


//Lucid_LucidBinding_0_23_1664135170292783662929971957
/*lucidcode*/
$(/*luc!d_element*/'DIV.#choose-green'/*luc!d_element_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('1664135170292783662929971957',event);/*luc!d_debug_end*/
	/*luc!d_function*/changeStyleGreen(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid

//Lucid_LucidBinding_100_23_163886998686259828027191063
/*lucidcode*/
$(/*luc!d_element*/'DIV.#choose-blue'/*luc!d_element_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('163886998686259828027191063',event);/*luc!d_debug_end*/
	/*luc!d_function*/changeStyleBlue(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid


});

//Lucid_LucidChangeAttributeAction_0_196_18586072903155937682047334333
function changeStyleGreen(senderObject, event) {
	lucidDebug('18586072903155937682047334333',event);
/*lucidcode*/
var ele = /*luc!d_element*/'DIV.#bluebox'/*luc!d_element_end*/;
	$(ele)./*luc!d_function_0*/attr/*luc!d_function_0_end*/(/*luc!d_property_0*/'style'/*luc!d_property_0_end*/, /*luc!d_value_0*/'background-color:green;width:213px;height:196px'/*luc!d_value_0_end*/ );
	$(ele)./*luc!d_function_1*/attr/*luc!d_function_1_end*/(/*luc!d_property_1*/'class'/*luc!d_property_1_end*/, /*luc!d_value_1*/'dropshadow'/*luc!d_value_1_end*/ );
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidChangeAttributeAction_107_197_453009772905709389893610987
function changeStyleBlue(senderObject, event) {
	lucidDebug('453009772905709389893610987',event);
/*lucidcode*/
var ele = /*luc!d_element*/'DIV.#bluebox'/*luc!d_element_end*/;
	$(ele)./*luc!d_function_0*/attr/*luc!d_function_0_end*/(/*luc!d_property_0*/'style'/*luc!d_property_0_end*/, /*luc!d_value_0*/'background-color:blue;width:213px;height:196px'/*luc!d_value_0_end*/ );
	$(ele)./*luc!d_function_1*/attr/*luc!d_function_1_end*/(/*luc!d_property_1*/'class'/*luc!d_property_1_end*/, /*luc!d_value_1*/''/*luc!d_value_1_end*/ );
/*lucidcode_end*/

}
//EndLucid

