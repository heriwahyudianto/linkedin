function EditPhoto(props) {  
  return (    
    <div className="overlay relative" style={{display: props.display}}>
      <div className='formCnt relative rounded p2'>
        <div className='flex justify-between items-center'>
          <div className='flex-auto'>
            <h2 className="my0">Edit photo</h2>
          </div>  
          <button className='noBtn' onClick={() => {
            //setShowPhotoEditForm(false)
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
            </svg>
          </button>
        </div>
        <label className='label mb1'>Photo URL</label>
        <input type="url" name="homepage" required className='inputTxt p1 rounded mb2'/>
        <div className='right-align'>
          <button className="saveBtn" onClick={() => {
            //setShowPhotoEditForm(false)
          }} >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPhoto;
