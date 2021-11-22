import React from 'react'
import ProductsList from '../Products/ProductsList'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Grid, Paper } from '@mui/material'
const Content = () => {
  return (
    <Grid item md={9}>
      <Paper>
        <section className="product__block">
          <Container>
            <Typography variant="h2" gutterBottom component="div">
              Товары
            </Typography>
            <ProductsList />
          </Container>
        </section>
      </Paper>
    </Grid>
  )
}

export default Content
