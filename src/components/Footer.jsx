import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div className='row p-4 mt-5 bg-info'>
        <div className='col-4'>
            <h2>Portfolio</h2>
            <p style={{textAlign:'justify'}}>the Indian Space Research Organisation (ISRO) chairman has stirred conversations about the potential existence of extraterrestrial life. Emphasising the rapid advancements in human technology, the ISRO chief suggests that the existence of alien civilizations is not just possible but likely across</p>
        </div>
        <div className='col-4'>
            <h2>Importent Links</h2>
            <a href="">Link1</a>
            <a href="">Link2</a>
            <a href="">Link3</a>
        </div>
        <div className='col-4'>
            <h2>Message Us</h2>
            <textarea name="" className='form-control mb-3' placeholder='Enter Your Messeage' id=""></textarea>
        <button className='btn btn-success'>Send</button>
        </div>
        <h4 className='mt-5 text-end'>Alright &copy; Reserved</h4>


    </div>
  )
}

export default Footer