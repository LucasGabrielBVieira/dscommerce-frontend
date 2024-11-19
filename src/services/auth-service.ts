import QueryString from "qs";
import { CredentialsDTO } from "../models/auth";
import { ClientId, ClientSecret } from "../utils/system";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import * as accesTokenRepository from "../localstorage/access-token-repository";

export function loginRequest(loginData: CredentialsDTO) {

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + window.btoa(`${ClientId}:${ClientSecret}`)
    }

    const data = QueryString.stringify({
        ...loginData, grant_type: 'password'
    })

    const config : AxiosRequestConfig = {
        method: 'POST',
        url: '/oauth/token',
        headers,
        data
   }

    return requestBackend(config);

}

export function logout() {
    accesTokenRepository.remove()
}

export function saveAccessToken(token: string) {
    accesTokenRepository.save(token);
}

export function getAccessToken() {
    accesTokenRepository.get();
}