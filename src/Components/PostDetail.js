import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/firestore";

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  
  const firestore = firebase.firestore();

  useEffect(() => {
    firestore
      .collection('posts')
      .doc(postId)
      .get()
      .then((snapshot) => {
        console.log('snapshot', snapshot.data());
        setPost(snapshot.data());
      });
  }, []);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
