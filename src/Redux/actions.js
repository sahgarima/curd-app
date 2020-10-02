
export function getList() {  
    return {type:'GET_LIST'}
    }  
;  
export function addItem(data) {  
    return {type:'ADD_ITEM',payload:data}
    }  
;  
export function createRow(data) {  
    return {type:'CREATE_LIST',payload:data}
    }  
;  
export function deleteRow(id) {  
    return {type:'DELETE_LIST',id:id}
    }  
;  
export function updateRow(obj) {  
    return {type:'UPDATE_LIST',payload:obj}
    }  
;  
export function editRow(id) {  
    return {type:'EDIT_LIST',id:id}
    }  
;  