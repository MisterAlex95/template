import axios from "axios";

import { IS_FETCHING, FETCHED, FETCH_ERROR } from "../constants";

export default function fetchData(dispatch, options = {}) {
  dispatch({ type: IS_FETCHING });

  const req = {
    method: "GET",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    url: "URL"
  };

  return axios(req)
    .then(response => {
      dispatch({ type: FETCHED, data: response.data });
      return response.data;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_ERROR, error: err.message });
      return err;
    });
}
