const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

// 格式化日期 MM月DD格式
const formatDate = date => {
  const mymonth = formatNumber(date.getMonth() + 1)
  const myday = formatNumber(date.getDate())
  return (mymonth + "月" + myday + "日")
}
// 获取当前时间的上周时间范围
const getLastWeekRange = () => {
  const dataValue = new Date();
  const year = dataValue.getFullYear();
  const month = dataValue.getMonth() + 1;
  const day = dataValue.getDate();
  let thisWeekStart; //本周周一的时间
  if (dataValue.getDay() == 0) { //周天的情况；
    thisWeekStart = (new Date(year + '/' + month + '/' + day)).getTime() - ((dataValue.getDay()) + 6) * 86400000;
  } else {
    thisWeekStart = (new Date(year + '/' + month + '/' + day)).getTime() - ((dataValue.getDay()) - 1) * 86400000;
  }
  //获得上周时间
  const prevWeekStart = thisWeekStart - 7 * 86400000; //上周周一的时间
  const prevWeekEnd = thisWeekStart - 1 * 86400000; //上周周日的时间
  const stime = formatDate(new Date(prevWeekStart)); //开始时间
  const etime = formatDate(new Date(prevWeekEnd)); //结束时间
  return stime + etime
}
// 获取当前时间的上个月时间范围
const getLastMonthRange = () => {
  const dataValue = new Date();
  const currentYear = dataValue.getFullYear();
  const currentMonth = dataValue.getMonth();
  let prevCurrentYear = 0,
    prevCurrentMonth = 0;
  if (currentMonth == 0) {
    prevCurrentYear = currentYear - 1;
    prevCurrentMonth = 12;
  } else {
    prevCurrentYear = currentYear;
    prevCurrentMonth = currentMonth - 1;
  }
  var prevmonthLastday = (new Date(currentYear, currentMonth, 1)).getTime() - 86400000;
  var stime = formatDate(new Date(prevCurrentYear, prevCurrentMonth, 1)); //开始时间
  var etime = formatDate(new Date(prevmonthLastday));
  console.log(stime, etime)
}


const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


module.exports = {
  formatTime: formatTime,
  getLastWeekRange: getLastWeekRange
}