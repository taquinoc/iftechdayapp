import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

/**
 * O parêntese utilizado no final da ArrowFunction serve para não precisar de um return.
 em react sempre tem que ter um componente pai encapsulando tudo
 */

const AboutPage = () => (
    <Layout>
    <SEO title="About"/>
        <h1>About Page</h1>
    </Layout>
);

/**
 * Após a criação da página, é necessário exportá-la
 */
export default AboutPage;