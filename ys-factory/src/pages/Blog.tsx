/***
 * Blog
 * 技術ブログページ
 */

import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import DrawerAppBar from '../uiparts/DrawerAppBar';
import { useEffect, useState } from 'react';
import { createClient } from 'microcms-js-sdk';
import { useNavigate } from 'react-router-dom';

// microCMSクライアントの初期化
const client = createClient({
  serviceDomain: 'ysfactory', // サービスドメインは適宜修正してください
  apiKey: 'NT0qyCO29SnPwMDwfPqrFeARoFUHbpJx2GAp',
});

// 記事型
type BlogType = {
  id: string;
  title: string;
  content: string;
  eyecatch?: { url: string };
  categoly?: string;
  publishedAt: string;
};

const Blog = () => {
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const data = await client.get({ endpoint: 'blogs' });
          setBlogs(data.contents);
        } catch (e: any) {
          setError('記事の取得に失敗しました');
        } finally {
          setLoading(false);
        }
      };
      fetchBlogs();
    }, []);

    return (
        <>
            <DrawerAppBar title="Blog"/>
            <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", mt: 4}}>
                <Typography variant="h4" gutterBottom>
                    技術ブログ
                </Typography>
                <Typography variant="body1" gutterBottom>
                    ここでは開発に関する技術記事やノウハウを発信していきます。
                </Typography>
                {loading && <Typography>記事を読み込み中...</Typography>}
                {error && <Typography color="error">{error}</Typography>}
                <Box sx={{width: '100%', maxWidth: 600, mt: 2}}>
                  {blogs.map((blog) => (
                    <Card key={blog.id} sx={{mb: 2, cursor: 'pointer'}} onClick={() => navigate(`/blog/${blog.id}`)}>
                      <CardContent>
                        {blog.eyecatch && (
                          <Box sx={{mb: 1, textAlign: 'center'}}>
                            <img src={blog.eyecatch.url} alt={blog.title} style={{maxWidth: '100%', maxHeight: 200, borderRadius: 8}} />
                          </Box>
                        )}
                        <Typography variant="h6">{blog.title}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {new Date(blog.publishedAt).toLocaleDateString()}
                        </Typography>
                        {blog.categoly && (
                          <Typography variant="body2" color="primary" sx={{ml: 1, display: 'inline'}}>
                            [{blog.categoly}]
                          </Typography>
                        )}
                        <Typography variant="body2" sx={{mt: 1}}>
                          {blog.content ? blog.content.slice(0, 100) + (blog.content.length > 100 ? '...' : '') : ''}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
            </Container>
        </>
    );
}

export default Blog; 