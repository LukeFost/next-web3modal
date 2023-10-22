import { w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import { configureChains, createConfig } from "wagmi";
import { goerli, mainnet, arbitrumGoerli } from "wagmi/chains";

export const walletConnectProjectId = "1d373cef24713d3b2cc6beb8e97e6c25";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    arbitrumGoerli,
    ...(process.env.NODE_ENV === "development" ? [goerli] : []),
  ],
  [w3mProvider({ projectId: walletConnectProjectId })]
);

export const config = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({
    chains,
    projectId: walletConnectProjectId,
    version: 2,
  }),
  publicClient,
  webSocketPublicClient,
});

export { chains };
