import React from 'react';

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from "../components/Search"

/**
 * O parêntese utilizado no final da ArrowFunction serve para não precisar de um return.
 em react sempre tem que ter um componente pai encapsulando tudo
 */

const SearchPage = () => (
    <Layout>
    <SEO title="Search"/>
        <h1>Search Page</h1>
        <Search />
    </Layout>
);

/**
 * Após a criação da página, é necessário exportá-la
 */
export default SearchPage;