import { CreateTransactionResponse, FireblocksSDK, TransactionResponse } from "fireblocks-sdk";
import { Logger } from "./types";
export declare const waitForSignature: (tx: CreateTransactionResponse, fireblocksApiClient: FireblocksSDK, pollingInterval: number | undefined, waitForFireblocksConfirmation: boolean, logger?: Logger) => Promise<TransactionResponse>;
