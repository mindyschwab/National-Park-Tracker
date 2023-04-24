import { useState, useEffect } from 'react'
import { getTips, postTip } from '../../../utils/backend'
import Tip from '../Tip'

function TipSection({ parkId }) {
    const [tips, setTips] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [createFormData, setCreateFormData] = useState({
        userName: '',
        tipContent: ''
    })

    // Query the database for all comments that pertain to this artwork
    useEffect(() => {
        getTips(parkId)
            .then(tips => setTips(tips))
    }, [])

    // Update the tips form fields as the user types
    function handleInputChange(event) {
        setCreateFormData({
            ...createFormData,
            [event.target.name]: event.target.value
        })
    }

    // Render a form that allows a user to create a tip on submit
    function toggleCreateForm() {
        setShowCreateForm(!showCreateForm)
    }

    // Execute form submission logic
    function handleSubmit(event) {
        event.preventDefault()
        // clear the form
        setCreateFormData({
            userName: '',
            tipContent: ''
        })
        // close the form
        setShowCreateForm(false)
        // create the tip in the backend
        postTip({ ...createFormData, parkId: parkId })
            .then(() => refreshTips())
    }

    // Update the tips in the tips section after a database transaction
    function refreshTips() {
        getTips(parkId)
            .then(newTipsData => setTips(newTipsData))
    }

    // conditionally display the text of the create form button
    let btnText = 'Add Tip'
    if (showCreateForm) {
        btnText = 'Cancel'
    }

    // conditionally render tips
    let tipElements = [<p key='0' className='text-center'>No tip yet. Be the first to add a tip for this park!</p>]
    if (tips.length > 0) {
        tipElements = tips.map(tip => {
            return <Tip
                key={tip._id}
                data={tip}
                refreshTips={refreshTips}
            />



        })
    }
    return (
        <>
            <h2 className=''>Tips</h2>
            <button
                onClick={toggleCreateForm}
                className=" text-white hover:bg-green-800 font-bold py-2 px-4 bg-green-900 rounded cursor-pointer mr-2"
            >
                {btnText}
            </button>
            {
                showCreateForm && <form
                    onSubmit={handleSubmit}
                    className="bg-gray-100 rounded-lg p-4 my-4 border-gray-700 border-2 w-[80vw] mx-auto text-right">
                    <input
                        name="userName"
                        className="px-2 py-1 w-full bg-gray-100"
                        placeholder="Your name"
                        value={createFormData.name}
                        onChange={handleInputChange}
                    />
                    <br />
                    <textarea
                        name="tipContent"
                        className="p-2 my-2 h-[100px] w-full bg-gray-100"
                        placeholder="Share your thoughts!"
                        value={createFormData.content}
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="text-white hover:bg-gray-800 font-bold py-2 px-4 bg-gray-700 rounded cursor-pointer mr-2">
                        Post
                    </button>
                </form>
            }
            {tipElements}
        </>
    )
}

export default TipSection;
