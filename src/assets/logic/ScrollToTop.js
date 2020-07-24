import React, { useEffect, useRef } from "react"
import { withRouter } from "react-router-dom"

const ScrollToTop = props => {
  const prevProps = useRef()
  useEffect(() => {
    if (props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  })

  return <React.Fragment />
}

export default withRouter(ScrollToTop)
