import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  BarChart,
  Bar,
  Pie,
  PieChart,
} from "recharts";
import { useRouter } from "next/router"

const Profile = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 200, pv: 3400, amt: 2400 },
    { name: "Page c", uv: 600, pv: 1400, amt: 2400 },
  ];
  const data01 = [
    { name: "Facebook", users: 2000000000 },
    { name: "Instagram", users: 1500000000 },
    { name: "Twiter", users: 1000000000 },
    { name: "Telegram", users: 500000000 },
  ];
  const data02 = [
    { name: "Facebook", users: 12000000000 },
    { name: "Instagram", users: 1150000000 },
    { name: "Twiter", users: 11000000000 },
    { name: "Telegram", users: 150000000 },
  ];
  const router = useRouter()
  const {
    query: { name, phone },
  } = router

  return (
    <div style={{paddingTop:"50px"}}>
      <div className="profileTop">
        <div className="form">
          <h3>Hello user {name}</h3>
          <h3>{phone}</h3>
        </div>
        <PieChart width={730} height={250}>
          <Pie
            data={data01}
            dataKey="users"
            nameKey="name"
            isAnimationActive={false}
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="users"
            nameKey="name"
            isAnimationActive={false}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Profile;

// import React from "react";
// import { getUserProfile } from "/lib/auth";

// export default class Profile extends React.Component {
//     state ={
//         user: null
//     };
//     componentDidMount(){
//         getUserProfile().then(user =>this.setState({user}));
//     }
//     render(){
//     return <pre>{JSON.stringify(this.state.user, null, 2)}</pre>;
//     }
// }
