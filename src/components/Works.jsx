import React from 'react'

function Works() {
    return (
        <>
            <h1 className='text-center mt-3 mb-5'>Works!</h1>
            <div className='d-flex justify-content-around flex-wrap p-4'>
            <div className='card ' style={{width:'18rem'}}>
                <img src="https://image.cnbcfm.com/api/v1/image/107032274-1647540069295-gettyimages-1084167640-2018_10_13-n1_office_0312.jpeg?v=1647540545
                " alt="" className='card-img-top' style={{height:'180px'}} />
                <div className='card-body'>
                    <h4 className='card-title'>Work 1</h4>
                </div>

            </div>

            <div className='card'style={{width:'18rem'}}>
                <img src="https://t3.ftcdn.net/jpg/05/24/37/16/360_F_524371662_i8JkwIuMQkwJLQJGgaU7dqQ8pVzqhErW.jpg" alt="" className='card-img-top' />
                <div className='card-body' style={{height:'200px'}} >
                    <h4 className='card-title'>Work 2</h4>
                </div>

            </div>

            <div className='card' style={{width:'18rem'}}>
                <img src="https://img.freepik.com/free-photo/group-young-people-work-modern-office_641386-173.jpg" alt="" className='card-img-top' />
                <div className='card-body' style={{height:'200px'}} >
                    <h4 className='card-title'>Work 3</h4>
                </div>

            </div>

            <div className='card' style={{width:'18rem'}}>
                <img src="https://globalwfm.com/wp-content/uploads/2022/08/Should-You-Return-To-Office-Work-Pros-And-Cons.jpg
                " alt="" className='card-img-top' />
                <div className='card-body' style={{height:'200px'}} >
                    <h4 className='card-title'>Work 4</h4>
                </div>

            </div>

            

            

            </div>
            

        </>

    )
}

export default Works