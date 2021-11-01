import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/styles';

const Breadcrumb = () => {
    return (
        <Container style={{ marginLeft: 0 }}>
            <Link to={`/`}>Go back to search</Link>
        </Container>
    );
};
export default Breadcrumb;
