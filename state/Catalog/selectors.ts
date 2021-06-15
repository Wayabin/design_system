import { createDeepEqualSelector } from '../utils/storeUtils'

export const selectProductList = createDeepEqualSelector(
  ({ catalog }) => catalog.productList,
  productList => ({
    page: productList.page,
    pagesCount: productList.pagesCount,
    pageSize: productList.pageSize,
    items: Object.values(productList.items),
    hasError: productList.hasError
  })
)

export const selectProductDetail = createDeepEqualSelector(
  ({ catalog }) => catalog.productDetail,
  productDetail => productDetail
)

export const selectProductOffering = createDeepEqualSelector(
  ({ catalog }) => catalog.productOffering,
  productOffering => productOffering
)
