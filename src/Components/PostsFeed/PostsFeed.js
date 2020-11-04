import React, { useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { selectFeedLoading, selectFeedPosts } from "../../store/Feed/feedSelectors";
import { postsFetched, startLoading } from "../../store/Feed/feedActions";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

function PostsFeed() {
  const dispatch = useDispatch();
  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);
  // const [data, setData] = useState({
  //   loading: true,
  //   posts: [],
  // });

  const fetchNext5Posts = async () => {
    dispatch(startLoading());

    try {
      const response = await axios.get(`${API_URL}/posts?offset=${posts.length}&limit=5`);
      console.log("INCOMING DATA", response.data);

      const morePosts = response.data.rows;

      // setData({ loading: false, posts: [...data.posts, ...morePosts] });
      dispatch(postsFetched(morePosts));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchNext5Posts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("WHAT IS DATA", posts);

  return (
    <div className="PostsFeed">
      <h2>Recent Posts</h2>
      {posts.length === 0 ? (
        <h3>...loading</h3>
      ) : (
        posts.map((post) => {
          return (
            <div className="Post" key={post.id}>
              <h2>{post.title}</h2>
              <p>{moment(post.createdAt).format("DD-MM-YYYY")}</p>
              {post.tags.map((tag) => {
                return <span key={tag.id}>{tag.tag}</span>;
              })}
            </div>
          );
        })
      )}

      <p>{loading ? <em>Loading...</em> : <button onClick={fetchNext5Posts}>Load more</button>}</p>
    </div>
  );
}

export default PostsFeed;
