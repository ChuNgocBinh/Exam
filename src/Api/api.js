import axios from "axios"

export const getData = (filter) =>{
    return axios({
        url: "http://139.99.62.190:8000/api/v1/fund_projects/filter",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        method: 'POST',
        data: filter
    })
}