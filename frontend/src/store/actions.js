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
// ---------------USER----------------------------------
export function getUser({ commit }) {
    return axiosClient.get("/user").then((res) => {
        console.log(res.data);
        commit("setUser", res.data);
        return res;
    });
}
export function getUsers(
    { commit },
    { url = null, search = "", perPage = 10, sort_field, sort_direction }
) {
    commit("setUsers", [true]);
    url = url || "/users";
    return axiosClient
        .get(url, {
            params: {
                search,
                per_page: perPage,
                sort_field,
                sort_direction,
            },
        })
        .then((res) => {
            commit("setUsers", [false, res.data]);
            return res;
        })
        .catch((err) => {
            console.log(err);
            commit("setUsers", [false]);
        });
}

export function createUser({ commit }, user) {
    if (user.image instanceof File) {
        const form = new FormData();
        form.append("name", user.name);
        form.append("email", user.email);
        form.append("password", user.password);
        form.append("image", user.image);
        form.append("address", user.address);
        form.append("published", user.published ? 1 : 0);
        user = form;
    }
    return axiosClient.post("/users", user);
}
export function deleteUser({ commit }, id) {
    return axiosClient.delete(`/users/${id}`);
}
export function updateUser({ commit }, user) {
    const id = user.id;
    if (user.image instanceof File) {
        const form = new FormData();
        form.append("id", user.id);
        form.append("name", user.name);
        form.append("email", user.email);
        form.append("password", user.password);
        form.append("image", user.image);
        form.append("address", user.address);
        form.append("_method", "PUT");
        user = form;
    }
    return axiosClient.post(`/users/${id}`, user);
}

// ------------------PRODUCT----------------------------
export function getProducts(
    { commit },
    { url = null, search = "", perPage = 10, sort_field, sort_direction }
) {
    commit("setProducts", [true]);
    url = url || "/products";
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

export function createProduct({ commit }, product) {
    if (product.image instanceof File) {
        const form = new FormData();
        form.append("title", product.title);
        form.append("description", product.description || "");
        form.append("image", product.image);
        form.append("price", product.price);
        form.append("published", product.published ? 1 : 0);
        product = form;
    }
    return axiosClient.post("/products", product);
}
export function deleteProduct({ commit }, id) {
    console.log(id);
    return axiosClient.delete(`/products/${id}`);
}
export function updateProduct({ commit }, product) {
    const id = product.id;
    if (product.image instanceof File) {
        const form = new FormData();
        form.append("id", product.id);
        form.append("title", product.title);
        form.append("image", product.image);
        form.append("description", product.description);
        form.append("price", product.price);
        form.append("_method", "PUT");
        product = form;
    }
    return axiosClient.post(`/products/${id}`, product);
}
