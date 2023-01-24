import React from 'react'
import '../login.css';

const ConfirmDialog = () => {
    
  return (
    <>
    <div className='confirm-modal'>
      <div className="modal-dialog">
          <div className="modal-content">
              <button className="close">&times;</button>
              <h4 className='modal-message'>mesage</h4>
              <div className="dialogbtns">
                <button className="dialogbtn confirm">Confirm</button>
                <button className="dialogbtn cancel">Cancel</button>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default ConfirmDialog