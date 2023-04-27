import { useState } from "react";
import { deleteTip, updateTip } from "../../../utils/backend";

function Tip({ data, refreshTips }) {
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({
        userName: data.userName,
        tipContent: data.tipContent
    })
    // Update the form fields as the user types
    function handleInputChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.name]: event.target.value
        })
    }
    // Execute form submission logic
    function handleSubmit(event) {
        event.preventDefault()
        // close the form
        setShowEditForm(false)
        // update the comment in the backend
        updateTip(editFormData, data._id)
            .then(() => refreshTips())
    }

    // Delete a tip from the database
    function handleDelete() {
        deleteTip(data._id)
            .then(() => refreshTips())
    }

    let tipElement =
        <div className="m-2 bg-warm-gray-200">
            <p className=" flex justify-start">{data.userName}</p>
            <p className=" flex justify-start">{data.tipContent}</p>
            <div className="flex justify-end">
                <button
                    onClick={() => { setShowEditForm(true) }}
                    className=" bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-1 px-3 border border-indigo-600 hover:border-transparent rounded m-2">
                    Edit
                </button>
                <button
                    onClick={handleDelete}
                    className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-1 px-3 border border-orange-600 hover:border-transparent rounded m-2">
                    Delete
                </button>
            </div>
        </div>

    // Change the tip to a form if the showEditForm state variable is true
    if (showEditForm) {
        tipElement = <form
            onSubmit={handleSubmit}
            className="bg-gray-100 rounded-lg p-4 my-4 mx-auto text-right">
            <input
                name="userName"
                className="px-2 py-1 w-full bg-gray-100"
                placeholder="Your name"
                value={editFormData.userName}
                onChange={handleInputChange}
            />
            <br />
            <textarea
                name="tipContent"
                className="p-2 my-2 h-[100px] w-full bg-gray-100"
                placeholder="Enter your tip"
                value={editFormData.tipContent}
                onChange={handleInputChange}
            />
            <div>
                <button
                    onClick={() => { setShowEditForm(false) }}
                    className="text-white hover:bg-gray-800 font-bold py-2 px-4 bg-gray-700 rounded cursor-pointer mr-2">
                    Close
                </button>
                <button
                    type="submit"
                    className="text-white hover:bg-green-800 font-bold py-2 px-4 bg-green-900 rounded cursor-pointer mr-2">
                    Submit
                </button>
            </div>
        </form>
    }

    return (
        <>
            {tipElement}
        </>
    )
}

export default Tip