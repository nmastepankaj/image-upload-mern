import React,{useState} from 'react'

export default function FileUpload() {
    const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch('http://localhost:3005/image', {
      method: 'POST',
      body: formData,
    })
    if (response) setStatus(response.statusText)
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }
  return (
    <div>
        {image.preview && <img src={image.preview} width='100' height='100' />}
      <hr></hr>
        <form className="mb-3" onSubmit={handleSubmit}>
            <label htmlFor="formFile" className="form-label">Default file input example</label>
            <input className="form-control" type="file" id="formFile" onChange={handleFileChange}/>
            <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Upload</button>
  </div>
        </form>
    </div>
  )
}
