import List from "@/components/List"
import Intro from "@/components/Intro"
import Resume from "@/components/Resume"


export default function Home() {
  return (
    <div className="wrapper">
      <Intro />
      <List />
      <Resume />
      <p className="copyright">2023 EasyIntern 🔹</p>
    </div>
  )
}
