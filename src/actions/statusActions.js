export const setPaperTopic=(paperTopic="News")=>({
    type:"SET_PAPER_TOPIC",
    paperTopic
  })

  export const setIsFetching=(isFetching=false)=>({
    type:"SET_IS_FETCHING",
    isFetching
  })

  export const setError=(error="")=>({
    type:"SET_ERROR",
    error
  })

