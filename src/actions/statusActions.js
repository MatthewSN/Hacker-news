import {setErrorType,setPaperTopicType,setIsFetchingType} from "./types"


export const setPaperTopic=(paperTopic="News")=>({
    type:setPaperTopicType,
    paperTopic
  })

  export const setIsFetching=(isFetching=false)=>({
    type:setIsFetchingType,
    isFetching
  })

  export const setError=(error="")=>({
    type:setErrorType,
    error
  })

