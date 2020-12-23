import _ from 'lodash';

const orderByCPDStatus = (tasks) => {
    return _.orderBy(
        tasks,
        [
            task => {
                return task.status === "CANCELLED"
            },
            task => {
                return task.status === "PENDENT"
            },
            task => {
                return task.status === "DONE"
            },
            task => {
                return task.date 
            }
        ],
        ['desc','desc','desc','asc']
    );
}

const orderByDPCStatus = (tasks) => {
    return _.orderBy(
        tasks,
        [
            task => {
                return task.status === "DONE"
            },
            task => {
                return task.status === "PENDENT"
            },
            task => {
                return task.status === "CANCELLED"
            },
            task => {
                return task.date 
            }
        ],
        ['desc','desc','desc','asc']
    );
}

const orderByPDCStatus = (tasks) => {
    return _.orderBy(
        tasks,
        [
            task => {
                return task.status === "PENDENT"
            },
            task => {
                return task.status === "DONE"
            },
            task => {
                return task.status === "CANCELLED"
            },
            task => {
                return task.date 
            }
        ],
        ['desc','desc','desc','asc']
    );
}

const orderByLTHPriority = (tasks) => {
    return _.orderBy(
        tasks,
        [
            task => {
                return task.priority === "3"
            },
            task => {
                return task.priority === "2"
            },
            task => {
                return task.priority === "1"
            },
            task => {
                return task.date 
            }
        ],
        ['desc','desc','desc','asc']
    );
}

const orderByHTLPriority = (tasks) => {
    return _.orderBy(
        tasks,
        [
            task => {
                return task.priority === "1"
            },
            task => {
                return task.priority === "2"
            },
            task => {
                return task.priority === "3"
            },
            task => {
                return task.date 
            }
        ],
        ['desc','desc','desc','asc']
    );
}

const orderByATZTitle = (tasks) => {
    return _.orderBy(
        tasks,
        [
            task => {
                return task.title
            }, 
            task => {
                return task.date 
            }
        ],
        ['asc','asc']
    );
}

const orderByZTATitle = (tasks) => {
    return _.orderBy(
        tasks,
        [
            task => {
                return task.title
            }, 
            
            task => {
                return task.date 
            }
        ],
        ['desc','asc']
    );
}


const orderByMRDate = (tasks) => {
    return _.orderBy(
        tasks,
        [
            task => {
                return task.date
            }, 
            task => {
                return task.status === "PENDENT"
            },
            task => {
                return task.status === "DONE"
            },
            task => {
                return task.status === "CANCELLED"
            },
        ],
        ['desc','desc','desc','desc']
    );
}

const orderByODate = (tasks) => {
    return _.orderBy(
        tasks,
        [
            task => {
                return task.date
            }, 
            
            task => {
                return task.status === "PENDENT"
            },
            task => {
                return task.status === "DONE"
            },
            task => {
                return task.status === "CANCELLED"
            },
        ],
        ['asc','desc','desc','desc']
    );
}

export default {
    orderByCPDStatus,orderByDPCStatus,orderByPDCStatus,orderByLTHPriority,orderByHTLPriority,orderByATZTitle,orderByZTATitle,orderByMRDate,orderByODate

}