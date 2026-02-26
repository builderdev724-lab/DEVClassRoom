import {BaseRecord, DataProvider, GetListParams, GetListResponse} from "@refinedev/core";
import {SUBJECTS_MOCK} from "@/constants/subjects";

export const dataProvider: DataProvider = {
  getList : async <TData extends BaseRecord = BaseRecord>({ resource} :
  GetListParams) : Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") { return { data: [] as TData[], total: 0 } };
      return {
        data: SUBJECTS_MOCK as unknown as TData[],
        total: SUBJECTS_MOCK.length,
    }
  },

    getOne: async () => {throw new Error('This func is not present in mock.')},
    create: async () => {throw new Error('This func is not present in mock.')},
    update: async () => {throw new Error('This func is not present in mock.')},
    deleteOne: async () => {throw new Error('This func is not present in mock.')},

  getApiUrl:() => '',
}
