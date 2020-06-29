import axios from "axios";

const baseURL = "/api";
const BEConfig = {
    baseURL,
    headers: {
    },

    transformResponse: [(data, header) => {
        if (!data)
            return { profileUrl: header.location };
        const jsonData = JSON.parse(data);
        if (header && header.location)
            return { ...jsonData, profileUrl: header.location };
        return jsonData;
    }]
};

const handleStatusCodes = ({ data, status, ...rest }) => {
    switch (status) {
        case 400:
            return data;
        case 401:
            //logout
            return { logout: true, ...data };
        case 403:
            return { error: "forbidden" };
        case 404:
            return;
        case 500:
            console.error(`status ${status}: ${JSON.stringify(data)}`);
            return data;
        default:
            console.error(`status ${status}: ${JSON.stringify(data)}`);
            return { data, status, ...rest };
    }
};

const handleError = (error) => {
    if (error.response) {
        throw handleStatusCodes(error.response);
    }
    if (error.request) {
        console.error(error.request);
        throw new Error("The request was made but no response was received");
    }
    console.error("Error", error.message);
    console.error(error.config);
    throw new Error(
        "Something happened in setting up the request that triggered an Error"
    );
};

const addConfiguration = (params) => ({ ...BEConfig, ...params });

const processResponse = ({ data }) => data;



const request = (config) =>
    axios
        .request(addConfiguration(config))
        .then(processResponse)
        .catch(handleError);
const http = { request };
export default http;
