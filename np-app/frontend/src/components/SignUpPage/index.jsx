function SignUpPage() {
    return (
        <>
            <div>
                <h1>Sign Up</h1>
                <form action="" className="">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-gray-100 rounded-lg p-4 my-4 border-gray-700 border-2 w-[35vw] mx-auto text-right">
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
                            className="p-2 my-2 h-[80px] w-full bg-gray-100"
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

                </form>
            </div>
        </>

    )
}

export default SignUpPage