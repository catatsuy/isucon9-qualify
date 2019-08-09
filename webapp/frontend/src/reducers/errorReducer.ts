import {
  INTERNAL_SERVER_ERROR,
  InternalServerErrorAction,
  NOT_FOUND_ERROR,
  NotFoundErrorAction,
} from '../actions/errorAction';
import {
  FETCH_ITEM_PAGE_FAIL,
  FetchItemPageFailAction,
} from '../actions/fetchItemPageAction';
import {
  FETCH_SETTINGS_FAIL,
  FetchSettingsFailAction,
} from '../actions/settingsAction';

export const NoError = 'NO_ERROR';
export const NotFoundError = 'NOT_FOUND';
export const InternalServerError = 'INTERNAL_SERVER_ERROR';
export type ErrorType =
  | typeof NoError
  | typeof NotFoundError
  | typeof InternalServerError;

export interface ErrorState {
  errorType: ErrorType;
  errorCode?: number;
}

const initialState: ErrorState = {
  errorType: NoError,
};

type errorActions =
  | NotFoundErrorAction
  | InternalServerErrorAction
  | FetchItemPageFailAction
  | FetchSettingsFailAction;

const error = (
  state: ErrorState = initialState,
  action: errorActions,
): ErrorState => {
  switch (action.type) {
    case NOT_FOUND_ERROR:
      return { errorType: NotFoundError, errorCode: 404 };
    case INTERNAL_SERVER_ERROR:
    case FETCH_ITEM_PAGE_FAIL:
    case FETCH_SETTINGS_FAIL:
      return { errorType: InternalServerError, errorCode: 500 };
    default:
      return { errorType: NoError };
  }
};

export default error;
