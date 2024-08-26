import React from 'react'

function Intro() {
    return (
        <>
            <div className='row container-fluid align-items-center'style={{height:'90vh'}}>
                <div className='col p-4'>
                    <h1>Portfolio</h1>
                    <p>Erling Braut Haaland né Håland; Urban East Norwegian: born 21 July
                        2000 is a Norwegian professional  footballer who plays as a striker for Premier League club Manc Erling Braut Haaland né Håland; Urban East Norwegian: born 21 July
                        2000 is a Norwegian professional</p>
                    <a href="" className='btn btn-success'>Visit</a>
                </div>

                <div className='col'>
                    <img src="https://png.pngtree.com/png-vector/20190228/ourlarge/pngtree-portfolio-conceptual-illustration-design-png-image_707839.jpg"
                     className='img-fulid' style={{height:'400px'}}  />
                </div>

            </div>
        </>

    )
}

export default Intro