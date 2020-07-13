import React from 'react'
import ProductFormula from '../molecules/ProductFormula'
import ProductInputField from '../molecules/ProductInputField'
import useProduct from '../hooks/useProduct'
import BackButton from '../atoms/BackButton'

export default function ProductContainer(): React.ReactElement {
  const { n, k, answer, setNewProduct } = useProduct()
  return (
    <>
      <ProductFormula n={n} k={k} answer={answer} />
      <ProductInputField n={n} k={k} setNewProduct={setNewProduct} />
      <BackButton />
    </>
  )
}
