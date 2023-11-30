import { TTransaction, TUser, TWallet } from "../types"
import axios, { AxiosResponse } from 'axios'
import { baseurl } from "./url"
export const getUser = async (): Promise<AxiosResponse<TUser>> => {
    const res = await axios.get<TUser>(`${baseurl}/user`)
    return res
}

export const getWallet = async (): Promise<AxiosResponse<TWallet>> => {
    const res = await axios.get<TWallet>(`${baseurl}/wallet`)
    return res
}

export const getTransactions = async (): Promise<AxiosResponse<TTransaction[]>> => {
    const res = await axios.get<TTransaction[]>(`${baseurl}/transactions`)
    return res
}