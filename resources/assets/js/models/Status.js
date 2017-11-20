const Status = {
    all (then) {
        return axios.get('/statuses')
            .then(({data}) => then(data));
    }
}

export default Status