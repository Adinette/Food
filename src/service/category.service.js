import { request } from "../service/request.service";

/**
 * Calls the backend API to add cars to the system.
 *
 * @param {object} data - The data containing the car information.
 * @return {Promise} A Promise that resolves to the response data from the server.
 */
export function getCategorie(data) {
    return request("categorie", "GET", data);
  }
/**
 * Calls the backend API to add cars to the system.
 *
 * @param {object} data - The data containing the car information.
 * @return {Promise} A Promise that resolves to the response data from the server.
 */
export function deleteCategorie(id) {
    return request("categorie/" + id, "DELETE", data);
  }
  /**
   * Sends a PUT request to update cars with the provided data.
   *
   * @param {object} data - The data to be used in the update request.
   * @return {Promise} A Promise that resolves with the result of the update request.
   */
  export function getPlat(id) {
    return request("plat/"+categorie?.id , "GET", data);
  }