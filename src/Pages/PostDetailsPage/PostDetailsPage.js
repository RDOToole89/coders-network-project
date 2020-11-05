import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import "./PostDetailsPage.css";

import {
  selectPostPageLoading,
  selectSpecificPost,
  selectSpecificPostComments,
} from "../../store/PostPage/postPageSelector";
import { fetchPostsWithComments } from "../../store/PostPage/postPageActions";

function PostDetailsPage() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(selectSpecificPost);
  const comments = useSelector(selectSpecificPostComments);
  const loading = useSelector(selectPostPageLoading);
  // console.log("WHAT IS LOADING?", loading);
  // console.log("WHAT IS POST", post);

  useEffect(() => {
    dispatch(fetchPostsWithComments(postId));
  }, [dispatch, postId]);

  // console.log("WHAT IS POST?", post);
  // console.log("WHAT IS COMMENTS?", comments);

  if (!post) {
    return <h1>Loading...</h1>;
  }

  console.log(loading);
  return (
    <div className="PostPage">
      <div className="Post">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p>{moment(post.createdAt).format("DD-MM-YYYY")}</p>
        <p>Contact at: </p>
      </div>
      <div className="Comments">
        <h3>Comment Section</h3>
        {!loading ? (
          comments.map((comment) => {
            return (
              <div key={comment.id} className="Comment">
                <p>{comment.text}</p>
                <div className="Comment-meta">
                  <span className="Comment-meta-data">{comment.developer.name}</span>
                  <span className="Comment-meta-data">{comment.developer.email}</span>
                  <span className="Comment-meta-data">{comment.createdAt}</span>
                </div>
              </div>
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
        {comments.length === 0 && <h3>No comments for this boring ass post ;-(!</h3>}
      </div>
    </div>
  );
}

export default PostDetailsPage;
