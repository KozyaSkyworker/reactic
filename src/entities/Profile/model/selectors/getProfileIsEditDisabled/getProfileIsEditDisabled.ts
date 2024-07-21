import { StateSchema } from "app/providers/StoreProvider";

export const getProfileIsEditDisabled = (state: StateSchema) => state.profile?.isEditDisabled