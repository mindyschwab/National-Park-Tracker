import { useState } from 'react'

function TipSection({ tips, parkId }) {
    // conditionally render comments
    let tipElements = [<p key='0' className='text-center'>No tip yet. Be the first to add a tip for this park!</p>]
    if (tips.length > 0) {
        tipElements = tips.map(tips => {
            return <div
                key={tips._id}
                className="">
                <p className="font-bold">{tips.userName}</p>
                <p className="font-bold">{tips.tipContent}</p>
                <div className="flex justify-end">
                    <button className=" m-2">
                        Edit
                    </button>
                    <button className="m-2">
                        Delete
                    </button>
                </div>
            </div>
        })
    }
    return (
        <>
            <h2 className=''>Tips</h2>
            {tipElements}
        </>
    )
}

export default TipSection;
