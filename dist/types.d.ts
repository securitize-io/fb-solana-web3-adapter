import { Transaction, VersionedTransaction } from "@solana/web3.js";
import { TransactionResponse, FeeLevel } from "fireblocks-sdk";
export { FeeLevel } from "fireblocks-sdk";
export type TransactionOrVersionedTransaction = Transaction | VersionedTransaction;
export declare const API_BASE_URLS: {
    readonly PRODUCTION: "https://api.fireblocks.io";
    readonly SANDBOX: "https://sandbox-api.fireblocks.io";
};
export type ApiBaseUrl = typeof API_BASE_URLS[keyof typeof API_BASE_URLS];
export type SignedTransaction = {
    readonly signedTx: Transaction;
    readonly fireblocksSignedTxPayload: TransactionResponse;
};
export declare const ASSET_IDS: {
    readonly SOLANA_DEVNET: "SOL_TEST";
    readonly SOLANA_MAINNET: "SOL";
};
export type AssetId = typeof ASSET_IDS[keyof typeof ASSET_IDS];
/**
 * apiKey: string - Fireblocks API Key
 *
 * apiSecretPath: string - Fireblocks API Secret key file PATH
 *
 * apiBaseUrl?: ApiBaseUrl | string - Fireblocks API Base URL - default production
 *
 * vaultAccountId: string | number - Fireblocks Vault Account ID
 *
 * pollingInterval?: number - Fireblocks API polling interval for tx status updates
 *
 * waitForFireblocksConfirmation?: boolean - Whether to wait for Fireblocks confirmation before returning the transaction. Default and recommended is true.
 *
 * feeLevel?: LOW | MEDIUM | HIGH - Fee level to use for transactions
 *
 * logger?: pass custom logger
 *
 * silent?: boolean - Whether to suppress logging output. Default is false, which means verbose logging is enabled.
 */
export interface FireblocksConnectionAdapterConfig {
    readonly apiKey: string;
    readonly apiSecretPath: string;
    readonly apiBaseUrl?: ApiBaseUrl | string;
    readonly vaultAccountId: string | number;
    devnet?: boolean;
    readonly pollingInterval?: number;
    readonly waitForFireblocksConfirmation?: boolean;
    readonly feeLevel?: FeeLevel;
    readonly logger?: Logger;
    readonly silent?: boolean;
}
export interface Logger {
    info(message: string, meta?: Record<string, unknown>): void;
    error(message: string, error?: Error, meta?: Record<string, unknown>): void;
    debug(message: string, meta?: Record<string, unknown>): void;
    warn(message: string, meta?: Record<string, unknown>): void;
}
