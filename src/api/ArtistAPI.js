import API from './';

export default {
    get() {
        return API.get('artists');
    },
    getList({ id }) {
        return API.get(`artists/${id}`);
    },
    create({ payload }) {
        return API.post('artists', payload);
    },
    update({ payload, id }) {
        return API.put(`artists/${id}`, payload);
    },
    delete({ id }) {
        return API.delete(`artists/${id}`);
    },
};
