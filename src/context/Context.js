import React, { useState, useEffect, createContext } from "react";
// import FeedbackData from "../data/FeedBackData"
const FeedbackContext = createContext();


export const FeedbackProvider = ({ children }) => {
    // const [isLoading, setIsLoadind] = useState(true)

    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })



    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch FeedBack
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)

    }
    // Add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })



        const data = await response.json()
        setFeedback([data, ...feedback])
    }


    // Delete feedback
    const handleDelete = async (id) => {
        await fetch(`/feedback/${id}`, { method: 'DELETE' })
        setFeedback(feedback.filter((item) => {
            return (
                item.id !== id
            )
        }))
    }


    // Update feedback 
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

            setFeedback(feedback.map((item) => item.id === id ? { ...item, ...data } : item))
    }




    const handleEdit = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }


    return <FeedbackContext.Provider value={{
        feedback,
        addFeedback,
        handleDelete,
        handleEdit,
        feedbackEdit,
        updateFeedback,
    }} >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
