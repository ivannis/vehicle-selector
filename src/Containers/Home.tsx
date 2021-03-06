import React from 'react';
import Layout from "../Theme/Layout";
import Hero from "../Components/Hero";
import CarHolder from "./CarHolder";
import {H1, H5} from 'baseui/typography';
import SearchForm, {FilterType} from "./SearchForm";
import {Cell, Grid} from 'baseui/layout-grid';
import {Block} from 'baseui/block';
import ResultList from "./ResultList"

function Home() {
    const [state, setState] = React.useState({
        model: null,
        year: null,
    });

    const handleOnSubmit = (filter: FilterType) => {
        if (filter.model !== null && filter.year) {
            setState({
                model: filter.model,
                year: filter.year,
            })
        }
    }

    return (
        <Layout>
            <Hero>
                <H1 marginBottom="scale500">10,254 Cars Listed Here!</H1>
                <H5 marginTop={0}>Your dream car is waiting</H5>
                <SearchForm onSubmit={handleOnSubmit}/>
                <CarHolder />
            </Hero>
            <Block marginTop="scale1000" marginBottom="scale1000">
                <Grid gridGutters={12}>
                    <Cell span={12}>
                        <ResultList model={state.model} year={state.year} />
                    </Cell>
                </Grid>
            </Block>
        </Layout>
    );
}

export default Home;
