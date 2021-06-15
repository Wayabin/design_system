// @ts-nocheck
import { from, of } from 'rxjs'
import { switchMap, catchError, mergeMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import * as types from './types'
import * as actions from './actions'
// import { MapCanonicalProductToProduct } from 'utils/mappers'

export const loadProductListEpic = (
  action$,
  _, // state
  { CatalogService }
) =>
  action$.pipe(
    ofType(types.LOAD_CATALOG_ACTION),
    switchMap(action =>
      from(CatalogService.getBannersList(action.payload)).pipe(
        mergeMap(response => {
          // const productList = response.products.map(MapCanonicalProductToProduct)
          return of(
            actions.loadCatalogActionCompleted({
              page: response.pagination.pageNumber,
              pagesCount: response.pagination.totalPages,
              pageSize: response.pagination.pageSize,
              items: [{ hola: res }]
            })
          )
        }),
        catchError((e) => of(actions.loadCatalogActionFailed(e)))
      )
    )
  )

