import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Card, Spin } from 'antd';
import avatar from './../../assets/images/avatar.jpg';
import image from './../../assets/images/shop-img.jpg';
import { getComments } from '../../services/services';
import './../styles.scss';

const Comments = () => {
  const { Text, Paragraph } = Typography;
  const { Meta } = Card;
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const getCommentsData = useCallback(
    async () => {
      setLoading(true);
      try {
        const response = await getComments();
        setComments(response?.data);
      } catch (e) {
        console.log({ commentsError: e });
      } finally {
        setLoading(false);
      }
    }, []);

  useEffect(() => {
    getCommentsData();
  }, [getCommentsData]);

  return (
    <Spin spinning={loading}>
      <Card
        bordered={false}
        className='card-wrapper text-center mb-5 border-bottom'
        cover={<img alt='title' src={image} className='card-img w-auto' />}
      >
        <Meta title={location.state.title} className='card-title' />
      </Card>
      {comments.filter(item => item.postId === location.state.id).map(item => (
        <div
          className='comment-wrapper d-flex align-items-center justify-content-around flex-row'
          key={item.id}
        >
          <img src={avatar} alt={item.name} />
          <div className='d-flex align-items-center flex-column flex-grow-4 comment-content'>
            <Text className='author-name'>{item.name}</Text>
            <Text className='author-email'>{item.email}</Text>
            <Paragraph className='author-body'>{`'${item.body}'`}</Paragraph>
          </div>
        </div>
      ))
      }
    </Spin>
  )
}
export default Comments;
