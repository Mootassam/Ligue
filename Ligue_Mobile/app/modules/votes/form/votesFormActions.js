import VotesService from "../votesService";
import Errors from "../../shared/error/error";
import { Message } from "@shared";
const prefix = "VOTES_FORM";

const votesFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: votesFormActions.CREATE_STARTED,
      });

      await VotesService.create(values);

      dispatch({
        type: votesFormActions.CREATE_SUCCESS,
      });

      Message.success("Votes enregistré avec succès");
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: votesFormActions.CREATE_ERROR,
      });
    }
  },
};

export default votesFormActions;
