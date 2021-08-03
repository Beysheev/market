import React from 'react';
import Container from "@material-ui/core/Container";
import BlogBanner from "./blogBanner";
import Content from "./Content";
import Rest from "./rest";

const Blog = () => {
    return (
        <div>
            <Container className='blogBanner'>
                <BlogBanner/>
            </Container>
            <Container>
                <Content/>
                <Rest/>
            </Container>
        </div>
    );
};

export default Blog;