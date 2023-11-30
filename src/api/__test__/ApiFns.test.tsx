import axios from 'axios';
import { getUser, getTransactions, getWallet } from '../utils';
import { mockTransactionData, mockUserData, mockWalletData } from '../../utils/testMockData';

jest.mock('axios')

describe('API Functions', () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>

    describe('test api functions', () => {
        test('getUser function should return the user info', async () => {
            const mockedResponse: any = {
                config: {},
                data: mockUserData,
                headers: {},
                statusText: 'OK',
                status: 200
            }

            mockedAxios.get.mockResolvedValueOnce(mockedResponse);
            expect(axios.get).not.toHaveBeenCalled();
            const data = await getUser();
            expect(axios.get).toHaveBeenCalled();
            expect(data.status).toEqual(200);
            expect(data.data).toEqual(expect.objectContaining({
                email: expect.any(String),
                first_name: expect.any(String),
                last_name: expect.any(String)
            }))
        });

        test('getWallet function should return the wallet info', async () => {
            const mockedResponse: any = {
                config: {},
                data: mockWalletData,
                headers: {},
                statusText: 'OK',
                status: 200
            }

            mockedAxios.get.mockResolvedValueOnce(mockedResponse);
            expect(axios.get).not.toHaveBeenCalled();
            const data = await getWallet();
            expect(axios.get).toHaveBeenCalled();
            expect(data.status).toEqual(200);
            expect(data.data).toEqual(expect.objectContaining({
                balance: expect.any(Number),
                ledger_balance: expect.any(Number),
                pending_payout: expect.any(Number),
                total_payout: expect.any(Number),
                total_revenue: expect.any(Number)
            }))
        });

        test('getTransactions function should return the transactions list', async () => {
            const mockedResponse: any = {
                config: {},
                data: mockTransactionData,
                headers: {},
                statusText: 'OK',
                status: 200
            }

            mockedAxios.get.mockResolvedValueOnce(mockedResponse);
            expect(axios.get).not.toHaveBeenCalled();
            const data = await getTransactions();
            expect(axios.get).toHaveBeenCalled();
            expect(data.status).toEqual(200);
            expect(data.data[0]).toEqual(expect.objectContaining({
                amount: expect.any(Number),
                date: expect.any(String),
                type: expect.any(String),
                status: expect.any(String)
            }))
        })
    })
});
