import FileUpload from "./FileUpload";
import Notes from "./Notes";


export default function Home(props) {
  const {showAlert} = props;
  return (
    <div>
      <h1>Upload Image</h1>

      {/* <Notes showAlert={showAlert}/> */}
      <FileUpload></FileUpload>
    </div>
  );
}
