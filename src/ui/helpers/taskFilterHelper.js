
const filterByCancelledStatus = (tasks) => {
    return tasks.filter(function (task){
        return (task.status === "CANCELLED")
    })
}

const filterByPendentStatus = (tasks) => {
    return tasks.filter(function (task){
        return (task.status === "PENDENT")
    })
}

const filterByDoneStatus = (tasks) => {
    return tasks.filter(function (task){
        return (task.status === "DONE")
    })
}

const filterByPriority1 = (tasks) => {
    return tasks.filter(function (task){
        return (task.priority === "1")
    })
}

const filterByPriority2 = (tasks) => {
    return tasks.filter(function (task){
        return (task.priority === "2")
    })
}

const filterByPriority3 = (tasks) => {
    return tasks.filter(function (task){
        return (task.priority === "3")
    })
}

export default {
    filterByCancelledStatus,filterByPendentStatus,filterByDoneStatus,filterByPriority1,filterByPriority2,filterByPriority3
}