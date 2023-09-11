import axiosClient from "../axios";

export async function login({ commit }, data) {
    return await axiosClient.post("/login", data).then(({ data }) => {
        commit("setUser", data.user);
        commit("setToken", data.token);
        return data;
    });
}

export function logout({ commit }) {
    return axiosClient.post("/logout").then((response) => {
        commit("setToken", null);
        return response;
    });
}

export function getUser({ commit }) {
    return axiosClient.get("/user").then((res) => {
        commit("setUser", res.data);
        return res;
    });
}

export function getProducts(
    { commit },
    { url = null, search = "", perPage = 10, sort_field, sort_direction }
) {
    commit("setProducts", [true]);
    url = url || "/product";
    return axiosClient
        .get(url, {
            params: { search, per_page: perPage, sort_field, sort_direction },
        })
        .then((res) => {
            commit("setProducts", [false, res.data]);
            return res;
        })
        .catch(() => {
            commit("setProducts", [false]);
            console.log("fail");
        });
}
