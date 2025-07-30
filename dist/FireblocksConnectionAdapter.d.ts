import { Connection, PublicKey, SendOptions, Commitment, SignatureResult, RpcResponseAndContext } from '@solana/web3.js';
import { CreateTransactionResponse, FeeLevel, TransactionArguments } from 'fireblocks-sdk';
import { FireblocksConnectionAdapterConfig, TransactionOrVersionedTransaction } from './types';
/**
 * Fireblocks Solana Web3 Connection Adapter Class
 *
 * Should be instantiated via the static 'create' method
 */
export declare class FireblocksConnectionAdapter extends Connection {
    private readonly adapterConfig;
    private readonly fireblocksApiClient;
    private readonly assetId;
    private readonly logger;
    private devnet;
    private account;
    private txNote;
    private externalTxId;
    private feeLevel;
    private constructor();
    private validateConfig;
    /**
     * Fireblocks Solana Web3 Connection Adapter factory method
     *
     * @param endpoint - required: solana cluster ('testnet' || 'devnet' || 'mainnet-beta')
     * @param config - required: FireblocksConnectionAdapterConfig
     * @param commitment - optional: The level of commitment desired when querying state ('processed' || 'confirmed' || 'finalized')
     * @returns - FireblocksConnectionAdapter instance
     */
    static create(endpoint: string, config: FireblocksConnectionAdapterConfig, commitment?: Commitment): Promise<FireblocksConnectionAdapter>;
    /**
     * Set transaction note
     * @param txNote - transaction note: string
     */
    setTxNote(txNote: string): void;
    getTxNote: () => string;
    getConfig: () => FireblocksConnectionAdapterConfig;
    /**
     * Set External Transaction Identifier
     * @param externalTxId - external transaction identifier: string
     */
    setExternalTxId: (externalTxId: string | null) => void;
    /**
     * Get External Transaction Identifier
     * @returns externalITxId - string
     */
    getExternalTxId: () => string | null;
    private setAccount;
    /**
     * Get current account's address (the address of the SOL/SOL_TEST wallet in the configured vault account)
     * @returns
     */
    getAccount: () => string;
    private signWithFireblocks;
    confirmTransaction(signatureOrConfig: string | {
        signature: string;
    }, commitment?: Commitment): Promise<RpcResponseAndContext<SignatureResult>>;
    sendTransaction(transaction: TransactionOrVersionedTransaction, signers?: {
        publicKey: PublicKey;
        secretKey: Uint8Array;
    }[] | SendOptions, options?: SendOptions): Promise<string>;
    /**
     * Set transaction fee level
     * @param feeLevel - transaction fee level: "HIGH" | "MEDIUM" | "LOW"
     */
    setFeeLevel(feeLevel: FeeLevel): void;
    /**
     * Get current fee level
     * @returns FeeLevel
     */
    getFeeLevel(): FeeLevel;
    protected createFireblocksTransaction(payload: TransactionArguments): Promise<CreateTransactionResponse>;
    protected getBlockhash(): Promise<string>;
}
