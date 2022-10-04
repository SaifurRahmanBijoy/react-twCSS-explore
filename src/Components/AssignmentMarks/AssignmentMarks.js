import React from "react";
import { LineChart, Tooltip, XAxis, YAxis, Line } from "recharts";

const AssignmentMarks = () => {
  const data = [
    {
      name: "Page A",
      marks: 4000,
      quiz: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      marks: 3000,
      quiz: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      marks: 2000,
      quiz: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      marks: 2780,
      quiz: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      marks: 1890,
      quiz: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      marks: 2390,
      quiz: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      marks: 3490,
      quiz: 4300,
      amt: 2100,
    },
  ];
  return (
    <div>
      <h1 className="mt-8 mb-3 text-3xl font:extrabold text-slate-600">
        A Rechart Example Given Below(with BarChart):
      </h1>
      <div className="flex justify-center items-center bg-slate-300 p-4 rounded-md mx-16 w-auto">
        <LineChart width={400} height={200} data={data}>
          <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default AssignmentMarks;
