import AutoUploadForm from "../../components/autoUploadForm.js";

const AddAuto = () => {
  return <AutoUploadForm fetchUrl="/api/backend/neue-auto" />;
};

export default AddAuto;
