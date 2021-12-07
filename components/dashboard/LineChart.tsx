import React from "react";
import { Line } from "react-chartjs-2";
import useSWR from "swr";
import { default as dayjs } from "dayjs";
import fetcher from "../../lib/utils/fetcher";
import ErrorMessage from "../common/ErrorMessage";
import LoadingSpinner from "../common/LoadingSpinner";

const options = {
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: "Number of comments in 1 day",
    },
  },
};

const countDay = (arr: string[]): Object => {
  return arr?.reduce(function (allTime: any, time: any) {
    if (time in allTime) allTime[time]++;
    else allTime[time] = 1;
    return allTime;
  }, {});
};

const LineChart = () => {
  const { data, error } = useSWR(
    `https://dummyapi.io/data/v1/comment?limit=50`,
    fetcher
  );

  // convert data to array contain time
  const convertData = data?.data.map(
    (time: any) => dayjs(time.publishDate).format("DD-MM")
    // time.publishDate.split("T")[0]
  );

  const dataTime = countDay(convertData); // {13-05: 4, 14-05: 8, ...}

  if (error) return <ErrorMessage message="Cannot load user..." />;
  if (!data) return <LoadingSpinner />;

  return (
    <div style={{ padding: "3rem 0" }}>
      {dataTime && (
        <Line
          data={{
            labels: Object.keys(dataTime).reverse(),
            datasets: [
              {
                data: Object.values(dataTime).reverse(),
                borderColor: "#0070f3",
                fill: true,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
};

export default LineChart;
