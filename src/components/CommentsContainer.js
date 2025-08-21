import React from 'react'
import Comment from './Comment'

const commentsData = [
    {
        name: "Hanumesh",
        text: "This course is too good. thanks Akashay saini..",
        replies:[
            
        ]
    },
    {
        name: "Hanumesh",
        text: "This course is too good. thanks Akashay saini..",
        replies:[
            {
                name: "Hanumesh",
                text: "This course is too good. thanks Akashay saini..",
                replies:[
                    {
                        name: "Hanumesh",
                        text: "This course is too good. thanks Akashay saini..",
                        replies:[
                            
                        ]
                    },
                    {
                        name: "Hanumesh",
                        text: "This course is too good. thanks Akashay saini..",
                        replies:[
                            
                        ]
                    },
                    {
                        name: "Hanumesh",
                        text: "This course is too good. thanks Akashay saini..",
                        replies:[
                            
                        ]
                    },
                ]
            },
            {
                name: "Hanumesh",
                text: "This course is too good. thanks Akashay saini..",
                replies:[
                    
                ]
            },
        ]
    },
    {
        name: "Hanumesh",
        text: "This course is too good. thanks Akashay saini..",
        replies:[
            {
                name: "Hanumesh",
                text: "This course is too good. thanks Akashay saini..",
                replies:[
                    
                ]
            },
        ]
    },
    {
        name: "Hanumesh",
        text: "This course is too good. thanks Akashay saini..",
        replies:[
            
        ]
    },
    {
        name: "Hanumesh",
        text: "This course is too good. thanks Akashay saini..",
        replies:[
            
        ]
    },
    {
        name: "Hanumesh",
        text: "This course is too good. thanks Akashay saini..",
        replies:[
            
        ]
    },
    {
        name: "Hanumesh",
        text: "This course is too good. thanks Akashay saini..",
        replies:[
            
        ]
    },
    {
        name: "Hanumesh",
        text: "This course is too good. thanks Akashay saini..",
        replies:[
            
        ]
    },
]

const CommentsList = ({ comments }) => {
    return (
        comments.map((comment, index) => (
            <div key={index}>
                <Comment data={comment}/>
                <div className='ml-5 border-l-2'>
                    <CommentsList comments={comment.replies} />
                </div>
            </div>
        ))
    )
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold'>Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;