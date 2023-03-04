/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "BaseWallet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseWallet__factory>;
    getContractFactory(
      name: "IAggregator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAggregator__factory>;
    getContractFactory(
      name: "IEntryPoint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEntryPoint__factory>;
    getContractFactory(
      name: "IStakeManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakeManager__factory>;
    getContractFactory(
      name: "IWallet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWallet__factory>;
    getContractFactory(
      name: "Greeter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Greeter__factory>;
    getContractFactory(
      name: "IVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVerifier__factory>;
    getContractFactory(
      name: "MyWallet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyWallet__factory>;
    getContractFactory(
      name: "MyWalletDeployer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyWalletDeployer__factory>;
    getContractFactory(
      name: "IVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVerifier__factory>;
    getContractFactory(
      name: "OTP",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OTP__factory>;
    getContractFactory(
      name: "OTPFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OTPFactory__factory>;
    getContractFactory(
      name: "Verifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Verifier__factory>;

    getContractAt(
      name: "BaseWallet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseWallet>;
    getContractAt(
      name: "IAggregator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAggregator>;
    getContractAt(
      name: "IEntryPoint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEntryPoint>;
    getContractAt(
      name: "IStakeManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakeManager>;
    getContractAt(
      name: "IWallet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWallet>;
    getContractAt(
      name: "Greeter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Greeter>;
    getContractAt(
      name: "IVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVerifier>;
    getContractAt(
      name: "MyWallet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MyWallet>;
    getContractAt(
      name: "MyWalletDeployer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MyWalletDeployer>;
    getContractAt(
      name: "IVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVerifier>;
    getContractAt(
      name: "OTP",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OTP>;
    getContractAt(
      name: "OTPFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OTPFactory>;
    getContractAt(
      name: "Verifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Verifier>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
