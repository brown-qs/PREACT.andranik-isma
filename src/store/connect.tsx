/***************************************************
 *                   CONNECT.TSX                   *
 * THIS FILE IS ALWAYS USED IF YOU USE REDUX-ZERO. *
 *     AND THIS FILE IS STATIC, IN MOST TIMES.     *
 ***************************************************/


import { h } from "preact";
import { Connect } from "redux-zero/preact";
import actions from './actions'

export default function(): any {
  return Child => props => (
    <Connect mapToProps={state => ({ ...state })} actions={actions}>
      {mappedProps => <Child {...mappedProps} {...props} />}
    </Connect>
  )
}
