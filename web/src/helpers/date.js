export const friendlyDate = date => {
  const d = new Date(date);
  return `${padValue(d.getMonth() + 1)}/${padValue(d.getDate())}/${d.getFullYear()}`;
}

const padValue = dateValue => {
  return dateValue > 9 ? dateValue : `0${dateValue}`;
}

export const getDateForNotes = dateValue => {
  const dt = new Date(dateValue).getTime()
  const now = new Date().getTime()
  const daysPast = (now - dt) / (1000*60*60*24)
  const hoursPast = (now - dt) / (60*60*1000)
  const minutesPast = (now - dt) / 60000
  if (daysPast > 10) {
    return friendlyDate(dateValue)
  } else if (daysPast > 1) {
    return `${Math.round(daysPast)}d ago`
  } else if( daysPast < 1 && hoursPast >= 1) {
    return `${Math.ceil(hoursPast)}h ago`
  } else if (hoursPast > 0 && minutesPast > 1) {
    return `${Math.round(minutesPast)}m ago`
  } else {
    return 'now'
  }
}
