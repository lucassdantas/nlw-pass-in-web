import { AtendeeList } from "./components/Attendee-list";
import { Header } from "./components/Header";

export default function App(){
  return (
    <div className="flex gap-2">
      <Header/>
      <AtendeeList/>
    </div>
  )
}
