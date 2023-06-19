import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import {Arbitrum, Mumbai, Binance} from "@thirdweb-dev/chains"
import "./styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = Binance;
const sdkOptions={
  readonlySettings: {
    rpcUrl: "https://binance.rpc-staging.thirdweb.com", // force read calls to go through your own RPC url
    chainId: Binance.chainId, // reduce RPC calls by sepcifying your chain ID
  }
};
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={activeChain} 
    supportedWallets={[
    metamaskWallet(),]} 
    //sdkOptions={sdkOptions}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
