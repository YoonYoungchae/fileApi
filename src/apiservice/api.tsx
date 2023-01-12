import httpCommon from "../http-common";

const fileUploadApi = (data: FormData): Promise<any> => {
    const res = httpCommon.post("url", { file: data }, { headers: { "Content-Type": "multipart/form-data" } });
    return res;
};

export { fileUploadApi };
