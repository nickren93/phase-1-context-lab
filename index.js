/* Your Code Here */

function createEmployeeRecord(employeeArray){
    const employeeRecord = {}
    employeeRecord.firstName = employeeArray[0]
    employeeRecord.familyName = employeeArray[1]
    employeeRecord.title = employeeArray[2]
    employeeRecord.payPerHour = employeeArray[3]
    employeeRecord.timeInEvents = []
    employeeRecord.timeOutEvents = []
    return employeeRecord
}

function createEmployeeRecords(employeeArrays){
    return employeeArrays.map(array => createEmployeeRecord(array))
}

function createTimeInEvent(dateStamp){
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(11)),
        date: dateStamp.slice(0, 10)
    })
    return this
}

function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.slice(11)),
        date: dateStamp.slice(0, 10)
    })
    return this
}

function hoursWorkedOnDate(date){
    //find the exact day in the employee's record:
    const timeInTargetDate = findDayInTimeIn.call(this, date)
    const timeOutTargetDate = findDayInTimeOut.call(this, date)
    //return hour difference
    return (timeOutTargetDate.hour - timeInTargetDate.hour)/100
}

//-------------------------------------------------------------------
function findDayInTimeIn(date){
    return this["timeInEvents"].find(element => {
        return element.date === date
    })
}

function findDayInTimeOut(date){
    return this["timeOutEvents"].find(element => {
        return element.date === date
    })
}
//-------------------------------------------------------------------

function wagesEarnedOnDate(date){
    const hours = hoursWorkedOnDate.call(this, date)
    return hours*(this.payPerHour)
}


function findEmployeeByFirstName(ArrayOfEmployeeRecords, firstName){
    return ArrayOfEmployeeRecords.find(element => element.firstName === firstName)
}


function calculatePayroll(ArrayOfEmployeeRecords){
    return ArrayOfEmployeeRecords.reduce((payRoll, element) => {
        return (payRoll + allWagesFor.call(element))
    }, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

