import React, { useEffect, useContext, useState } from 'react'

import { productsContext } from '../../contexts/ProductsContext'
import Grid from '@mui/material/Grid'
import ProductCard from './ProductCard'
import ReactPaginate from 'react-paginate'
import '../../assets/css/ProductList.css'

const ProductsList = () => {
  const { getProducts, products } = useContext(productsContext)

  const [page, setPage] = useState(0)

  const pageCount = Math.ceil(products.length / 4)

  useEffect(() => {
    getProducts()
  }, [])

  function changePage({ selected }) {
    setPage(selected)
  }

  const productsPerPage = 4

  const pageVisited = page * productsPerPage

  const displayProducts = products
    .slice(pageVisited, pageVisited + productsPerPage)
    .map((item) => <ProductCard key={item.id} item={item} />)

  return (
    <Grid container spacing={2}>
      {displayProducts}
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </Grid>
  )
}

export default ProductsList
