import Sidebar from "./sidebar";

export default function Dashboard(){
  return(
    <div className="bg-white">
        <Sidebar/>
        <div className="flex-1 w-full ml-64 bg-white p-8">
        <table class="border-collapse border-slate-200 border-2">
          <thead>
            <tr>
              <th class="border-2 px-4 py-2 border-slate-300 ...">State</th>
              <th class="border-2 px-4 py-2 border-slate-300 ...">City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-2 px-4 py-2 border-slate-300 ...">Indiana</td>
              <td class="border-2 px-4 py-2 border-slate-300 ...">Indianapolis</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
  )
}