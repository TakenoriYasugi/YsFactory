import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from 'microcms-js-sdk';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import DrawerAppBar from '../uiparts/DrawerAppBar';

const client = createClient({
  serviceDomain: 'ysfactory',
  apiKey: process.env.REACT_APP_MICROCMS_API_KEY || '',
});

type BlogType = {
  id: string;
  title: string;
  content: string;
  eyecatch?: { url: string };
  categoly?: string;
  publishedAt: string;
};

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await client.get({ endpoint: 'blogs', contentId: id as string });
        setBlog(data);
      } catch (e: any) {
        setError('記事の取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchBlog();
  }, [id]);

  return (
    <>
      <DrawerAppBar title="Blog Detail"/>
      <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", mt: 4}}>
        {loading && <Typography>記事を読み込み中...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        {blog && (
          <Box sx={{width: '100%', maxWidth: 700, mt: 2}}>
            <Card>
              <CardContent>
                {blog.eyecatch && (
                  <Box sx={{mb: 2, textAlign: 'center'}}>
                    <img src={blog.eyecatch.url} alt={blog.title} style={{maxWidth: '100%', maxHeight: 300, borderRadius: 8}} />
                  </Box>
                )}
                <Typography variant="h4" gutterBottom>{blog.title}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {new Date(blog.publishedAt).toLocaleDateString()}
                </Typography>
                {blog.categoly && (
                  <Typography variant="body2" color="primary" sx={{ml: 1, display: 'inline'}}>
                    [{blog.categoly}]
                  </Typography>
                )}
                <Typography variant="body1" sx={{mt: 2}}>
                  {blog.content}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        )}
      </Container>
    </>
  );
};

export default BlogDetail; 