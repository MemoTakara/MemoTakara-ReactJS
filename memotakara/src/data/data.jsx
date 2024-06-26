// kpi-data.jsx

const memoData = [
  {
    month: 4,
    tag: "IT",
    label: "Học thiết kế giao diện",
    score: 4,
    max: 5,
    min: 2,
    averageTime: 2,
    unit: "nhiệm vụ",
  },
];
memoData.forEach((item) => {
  item.percent = ((item.score - item.min) / (item.max - item.min)) * 100;
  item.remainingTime =
    item.score < item.max
      ? (item.averageTime * (item.max - item.score)).toFixed(2)
      : null;
});

// console.log(memoData);
export default memoData;
