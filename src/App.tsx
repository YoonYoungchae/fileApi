import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { fileUploadApi } from "./apiservice/api";

function App() {
    const fileApi = async (file: any) => {
        const res = await fileUploadApi(file);
        console.log("file api response : ", res);
    };
    const fileChange = (e: any) => {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);

        fileApi(formData);
    };
    return (
        <div className="App">
            <input type="file" multiple={true} id="fileUpload" onChange={fileChange}></input>
        </div>
    );
}

export default App;
