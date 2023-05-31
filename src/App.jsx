import { useEffect,useState } from "react"
import JobInfo from "./jobInfo"
import BtnContainer from "./btncontainer"
const URL = "https://course-api.com/react-tabs-project"
const App = ()=>{
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem,setCurrentItem]  = useState(0)
const fetchJobs = async ()=>{
const response = await fetch(URL)
const newJobs = await response.json()
setJobs(newJobs)
setIsLoading(false)
}
  useEffect(()=>{
  fetchJobs()
  },[])
 if(isLoading) {
  return <section className="jobs-center">
    <div className="loading"></div>
  </section>
 }
  return <section className="jobs-center">
  {/* button container */}
  <BtnContainer jobs={jobs}  currentItem={currentItem} SetCurrentItem={setCurrentItem}/>
  {/* job info */}
  <JobInfo jobs={jobs} currentItem={currentItem}/>
</section>
}
export default App