import React from "react"

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: "post",
    })
    const body = await result.json()
    setArticleInfo(body)
  }

  return (
    <div id="upvotes-section">
      <button onClick={() => upvoteArticle()}>add upvote</button>
      <p>this post has been upvoted {upvotes} times</p>
    </div>
  )
}

export default UpvotesSection
