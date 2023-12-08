import { ADD_SERVICE, CHANGE_SEARCH_FIELD, CHANGE_SERVICE_FIELD, CLEAR_SERVICE_FIELDS, DELETE_SERVICE, EDIT_SERVICE, FILL_SERVICE_FIELDS } from "./actions";

export function addService(data) {
  return {type: ADD_SERVICE, payload: data};
}

export function editService(data) {
  return {type: EDIT_SERVICE, payload: data}
}

export function deleteService(id) {
  return {type: DELETE_SERVICE, payload: {id}}
}

export function fillServiceFields(data) {
  return {type: FILL_SERVICE_FIELDS, payload: data};
}

export function changeServiceField(data) {
  return {type: CHANGE_SERVICE_FIELD, payload: data}
}

export function clearServiceFields() {
  return {type: CLEAR_SERVICE_FIELDS};
}

export function changeSearchField(value) {
  return {type: CHANGE_SEARCH_FIELD, payload: value};
}