import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { List, Card, Typography } from 'antd';
import image from './../../assets/images/shop-img.jpg';
import { getPosts } from '../../services/services';
import './../styles.scss';

const Lists = () => {
  const navigate = useNavigate();
  const { Meta } = Card;
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);

  const getPostsData = useCallback(
    async () => {
      setLoading(true);
      try {
        const response = await getPosts();
        setPosts(response?.data);
      } catch (e) {
        console.log({ commentsError: e });
      } finally {
        setLoading(false);
      }
    }, []);

  useEffect(() => {
    getPostsData();
  }, [getPostsData]);

  return (
    <>
      <Typography.Title className='text-center'>
        Welcome To The Malltina Test
      </Typography.Title>
      <List
        loading={loading}
        grid={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        pagination={{
          showSizeChanger: false
        }}
        dataSource={posts}
        renderItem={item => (
          <List.Item key={item.id}>
            <Card
              className='card-wrapper cursor-pointer text-center'
              onClick={() => {
                navigate('/comments', { state: item });
              }}
              cover={<img alt={item.title} src={image} className='card-img w-75 h-75' />}
            >
              <Meta title={item.title} className='card-title' />
            </Card>
          </List.Item>
        )}
      />
    </>
  )
}

export default Lists;