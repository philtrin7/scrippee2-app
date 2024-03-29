import { Order, Orders } from '../../generated/graphql'

export enum OrdersListActionTypes {
  FETCH_INBOX_LIST_START = 'FETCH_INBOX_LIST_START',
  FETCH_ARCHIVE_LIST_START = 'FETCH_ARCHIVE_LIST_START',
  FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS',
  SET_NEW_ORDER = 'SET_NEW_ORDER',
  NEW_ORDER_START = 'NEW_ORDER_START',
  CLEAR_NEW_ORDER = 'CLEAR_NEW_ORDER',
  CLEAR_FIELD = 'CLEAR_FIELD',
  SELECT_ORDER = 'SELECT_ORDER',
  SELECT_NEW_ORDER = 'SELECT_NEW_ORDER'
}

export interface OrdersListState {
  orders: Orders
  listType: ORDERS_LIST_TYPES | null
  listIsLoading: Boolean
  newOrder: NewOrder | null
  selectOrder: SelectOrder
}

export enum ORDERS_LIST_TYPES {
  ARCHIVE = 'ARCHIVE',
  INBOX = 'INBOX'
}

export type NewOrder = Pick<Order, 'customerName' | 'item'>

export interface SelectOrder {
  orderId: string | 'NEW' | null
}
