import {
 CLEAR_ALERT,
 DISPLAY_ALERT,
 DISPLAY_ALERT_ID,
 CREATE_PRODUCT_BEGIN,
 CREATE_PRODUCT_SUCCESS,
 CREATE_PRODUCT_ERROR,
 DELETE_PRODUCT_BEGIN,
 DELETE_PRODUCT_SUCCESS,
 DELETE_PRODUCT_ERROR,
 GET_PRODUCT_BEGIN,
 GET_PRODUCT_SUCCESS,
 GET_PRODUCT_ERROR
} from './action'

const reducer = (state, action) => {
 //display_alert_Name
 if (action.type === DISPLAY_ALERT) {
  return {
   ...state,
   showAlert: true,
   alertType: 'danger',
   alertText: 'Please provide all values'
  }
 }
 //display_alert_id
 if (action.type === DISPLAY_ALERT_ID) {
  return {
   ...state,
   showAlertId: true,
   alertType: 'danger',
   alertText: 'Please Provide ID'
  }
 }

 //clear_alert
 if (action.type === CLEAR_ALERT) {
  return {
   ...state,
   showAlert: false,
   alertType: '',
   alertText: ''
  }
 }
 //createProduct-began
 if (action.type === CREATE_PRODUCT_BEGIN) {
  return {
   ...state,
   isLoading: true
  }
 }
 //createProduct-success
 if (action.type === CREATE_PRODUCT_SUCCESS) {
  return {
   ...state,
   isLoading: false,
   token: action.payload.token,
   product: action.payload.product.name,
   id: action.payload.product.id,
   showAlert: true,
   alertType: 'success',
   alertText: 'Product Created...'
  }
 }
 //createProduct-Error
 if (action.type === CREATE_PRODUCT_ERROR) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   alertType: 'danger',
   alertText: action.payload.msg
  }
 }
 //deleteProduct-began
 if (action.type === DELETE_PRODUCT_BEGIN) {
  return {
   ...state,
   isLoading: true,
  }
 }
 //deleteProduct-success
 if (action.type === DELETE_PRODUCT_SUCCESS) {
  return {
   ...state,
   isLoading: false,
   showAlertId: true,
   alertType: 'success',
   alertText: 'Success! Product Removed'
  }
 }
 //deleteProduct-error
 if (action.type === DELETE_PRODUCT_ERROR) {
  return {
   ...state,
   isLoading: false,
   showAlertId: true,
   alertType: 'danger',
   alertText: action.payload.msg
  }
 }
 //getProduct-began
 if (action.type === GET_PRODUCT_BEGIN) {
  return {
   ...state,
   isLoading: true
  }
 }
 //getProduct-Success
 if (action.type === GET_PRODUCT_SUCCESS) {
  return {
   ...state,
   isLoading: false,
   products: action.payload.products
  }
 }
 //getProduct-error
 if (action.type === GET_PRODUCT_ERROR) {
  return {
   ...state,
   isLoading: false,
  }
 }

 throw new Error(`no such action : ${action.type}`)
}

export default reducer;