import { TTransaction, TUser, TWallet } from "../types"
import { axiosInstance } from "./axiosInstance"
import { AxiosResponse } from 'axios'
export const getUser = async (): Promise<AxiosResponse<TUser>> => {
    const res = await axiosInstance.get<TUser>('/user')
    return res
}

export const getWallet = async (): Promise<AxiosResponse<TWallet>> => {
    const res = await axiosInstance.get<TWallet>('/wallet')
    return res
}

export const getTransactions = async (): Promise<AxiosResponse<TTransaction[]>> => {
    const res = await axiosInstance.get<TTransaction[]>('/transactions')
    return res
}