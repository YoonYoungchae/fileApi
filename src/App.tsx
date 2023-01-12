import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { fileUploadApi } from "./apiservice/api";

function App() {
    const [file, setFile] = React.useState(null);
    const [formDataList, setFormDataList] = React.useState<FormData>();
    const fileApi = async (file: any) => {
        const res = await fileUploadApi(file);
        console.log("file api response : ", res);
    };
    const fileChange = (e: any) => {
        let formData = new FormData();
        for (let file of e.target.files) {
            formData.append("files", file);
        }
        setFormDataList(formData);
    };

    React.useEffect(() => {
        if (formDataList !== undefined) {
            fileApi(formDataList);
        }
    }, [formDataList]);

    return (
        <div className="App">
            <input type="file" multiple={true} id="fileUpload" onChange={fileChange}></input>
        </div>
    );
}

export default App;
