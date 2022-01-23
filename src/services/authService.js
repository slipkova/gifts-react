import api, {setAuthToken} from "./httpService";
import * as crypto from "crypto";

const authUrl = "auth/";
const tokenKey = "token";

async function passwordToHash(password, user) {
    const hash = crypto.createHash('sha256').update(password || user.password).digest('hex')
    return password ? hash : { ...user, password: hash };
}

export async function register(account) {
    const response = await api.client.post(
        authUrl + "get-token/",
        await passwordToHash(null, account)
    );
    if (response.status >= 200 && response.status < 300) {
        await setAuthToken(response.data.token);
    }
    return response;
}

export async function login(email, password) {
    const response = await api.client.put(authUrl + "get-token/", {
        email,
        password: await passwordToHash(password),
    });
    if (response.status >= 200 && response.status < 300) {
        await setAuthToken(response.data.token);
        return response;
    }
    return response;
}

export async function logout() {
    await setAuthToken("");
}


export async function getUser() {
    try {
        const response = await api.client.get(authUrl + "get-user/");
        //console.log(response);
        return response;
    } catch (error) {
        return null;
    }
}


export default {
    login,
    logout,
    getUser,
    register,
};