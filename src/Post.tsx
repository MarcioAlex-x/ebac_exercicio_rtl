import React, { useState, ReactNode } from 'react';

interface PostProps {
  imageUrl: string;
  children: ReactNode;
}

const Post: React.FC<PostProps> = ({ imageUrl, children }) => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <div>
      <img src={imageUrl} alt="Post" />
      <p>{children}</p>
      <input 
        type="text" 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        data-testid="comment-input" 
      />
      <button onClick={handleAddComment} data-testid="add-comment-button">Add Comment</button>
      <ul data-testid="comments-list">
        {comments.map((cmt, index) => (
          <li key={index}>{cmt}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
